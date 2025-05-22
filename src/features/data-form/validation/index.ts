import { z } from 'zod'

// Базовые схемы ===============================================================
// =============================================================================
export const fileSchema = z
	.instanceof(File)
	.refine(
		file => file.type.startsWith('image/'),
		'Файл должен быть изображением!'
	)

export const stringSchema = z.string().min(1, 'Поле должно быть заполнено!')

export const contentSchema = z
	.string()
	.min(5, 'Длина поля должна быть от 5 символов!')

export const phoneSchema = z.string().length(11, 'Некорректный номер телефона!')

export const companyEmailSchema = z.string().email('Некорректный e-mail!')

export const INNSchema = z.string().length(9, 'Некорректный ИНН!')

export const OGRNSchema = z.string().length(13, 'Некорректный ОГРН!')

export const pastDateSchema = z
	.union([z.coerce.date(), z.literal('')])
	.optional()

export const attachmentSchema = z.object({
	title: stringSchema.min(2, 'Длина поля должна быть хотя бы 2 символа!'),
	content: stringSchema.min(10, 'Длина поля должна быть хотя бы 10 символов!'),
})

export const attachmentsSchema = z.array(attachmentSchema)

// Композитная схема ===========================================================
// =============================================================================
export const dataSchema = z.object({
	logo: fileSchema,
	companyOrganizationalForm: stringSchema,
	companyFirmName: stringSchema,
	address: stringSchema,
	companyPhone: phoneSchema,
	companyEmail: companyEmailSchema,
	INN: INNSchema,
	OGRN: OGRNSchema,

	senderSName: stringSchema,
	senderFName: stringSchema,
	senderPatronymic: stringSchema,
	senderGrade: stringSchema,

	recipient: stringSchema,
	recipientPhone: phoneSchema,

	header: contentSchema,
	bodyContent: contentSchema,

	number: stringSchema,
	rNumber: z.string().optional(),
	receivedDate: pastDateSchema,

	attachments: attachmentsSchema,
})

export type DataForm = z.infer<typeof dataSchema>
