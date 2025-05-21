import Docxtemplater from 'docxtemplater'
import { MimeType, TemplateHandler } from 'easy-template-x'
import fs from 'fs'
import { NextRequest, NextResponse } from 'next/server'
import path from 'path'
import PizZip from 'pizzip'
import sharp from 'sharp'

export const POST = async (req: NextRequest) => {
	try {
		const formData = await req.formData()

		// Подготовка данных для docxtemplater
		const [y, m, d] = formData.get('receivedDate')?.toString().split('-') || ''
		const data = {
			companyOrganizationalForm: formData
				.get('companyOrganizationalForm')
				?.toString(),
			companyFirmName: formData.get('companyFirmName')?.toString(),
			address: formData.get('address')?.toString(),
			companyPhone: formData.get('companyPhone')?.toString(),
			companyEmail: formData.get('companyEmail')?.toString(),
			INN: formData.get('INN')?.toString(),
			OGRN: formData.get('OGRN')?.toString(),

			senderGrade: formData.get('senderGrade')?.toString(),
			senderSignature: formData.get('senderSName')?.toString(),
			sender: `${formData.get('senderSName')?.toString()} ${formData
				.get('senderFName')
				?.toString()
				?.charAt(0)}. ${formData
				.get('senderPatronymic')
				?.toString()
				?.charAt(0)}.`,

			recipient: formData.get('recipient')?.toString(),
			recipientPhone: formData.get('recipientPhone')?.toString(),

			header: formData.get('header')?.toString(),
			body: formData
				.get('body')
				?.toString()
				?.split(/\r?\n/)
				.filter(p => p.trim() !== '')
				.map(p => ({
					content: p,
				})),

			sendingDate: formatDate(new Date()),
			number: formData.get('number')?.toString(),
			rNumber: formData.get('rNumber')?.toString() || '',
			receivedDate: y && m && d ? `${d}.${m}.${y}` : '',
		}

		// Загрузка и обработка шаблона docxtemplater
		const templatePath = path.join(process.cwd(), 'public', 'template.docx')
		const template = fs.readFileSync(templatePath)
		const zip = new PizZip(template)

		const doc = new Docxtemplater(zip, {
			paragraphLoop: true,
			linebreaks: true,
			parser: tag => {
				return {
					get(scope) {
						return scope[tag] ?? `{${tag}}`
					},
				}
			},
		})

		doc.setData(data)
		doc.render()

		// Получение промежуточного DOCX без изображения
		let docxBuffer = doc.getZip().generate({
			type: 'nodebuffer',
			compression: 'DEFLATE',
		})

		// Обработка изображения через easy-template-x
		const imageFile = formData.get('logo')
		if (imageFile && imageFile instanceof File && imageFile.size > 0) {
			const imageBuffer = await imageFile.arrayBuffer()
			const image = sharp(Buffer.from(imageBuffer))

			const fixedHeightMm = 15
			const fixedHeightPoints = fixedHeightMm * 2.83465
			const metadata = await image.metadata()

			if (!metadata.width || !metadata.height) {
				throw new Error('Не удалось получить размеры изображения')
			}

			const aspectRatio = metadata.height / metadata.width
			const calculatedWidthPoints = fixedHeightPoints / aspectRatio

			const handler = new TemplateHandler()
			const imageData = {
				logo: {
					_type: 'image',
					source:
						imageFile.type === 'image/svg+xml'
							? await sharp(Buffer.from(imageBuffer))
									.resize({
										width: Math.round(calculatedWidthPoints),
										height: Math.round(fixedHeightMm * 2.83465),
										fit: 'contain',
										background: { r: 255, g: 255, b: 255, alpha: 0 },
									})
									.png()
									.toBuffer()
							: Buffer.from(imageBuffer),
					format:
						imageFile.type === 'image/svg+xml' ||
						imageFile.type === 'image/png+xml'
							? MimeType.Png
							: MimeType.Jpeg,
					width: Math.round(calculatedWidthPoints),
					height: Math.round(fixedHeightMm * 2.83465),
					positioning: {
						horizontal: 'center',
						vertical: 'center',
						wrapText: 'square',
					},
				},
			}
			docxBuffer = await handler.process(docxBuffer, imageData)
		}

		// Возврат результата
		return new NextResponse(docxBuffer as unknown as Blob, {
			status: 200,
			headers: {
				'Content-Type':
					'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
				'Content-Disposition': 'attachment; filename="letter.docx"',
			},
		})
	} catch (err: any) {
		console.error(err)
		return new NextResponse('Internal server error', { status: 500 })
	}
}

function formatDate(date: Date): string {
	const day = String(date.getUTCDate()).padStart(2, '0')
	const month = String(date.getUTCMonth() + 1).padStart(2, '0')
	return `${day}.${month}.${date.getUTCFullYear()}`
}
