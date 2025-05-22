import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from 'react-hook-form'
import { DataForm, dataSchema } from '../validation'

export const useDataForm = () => {
	const {
		control,
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm<DataForm>({
		resolver: zodResolver(dataSchema),
	})

	const attachArray = useFieldArray({
		control,
		name: 'attachments',
	})

	const createLetter = async (data: DataForm) => {
		const formData = new FormData()

		for (const [key, value] of Object.entries(data)) {
			if (key === 'logo' || key === 'attachments') continue

			if (value !== undefined && value !== null) {
				if (value instanceof Date) {
					formData.append(key, value.toISOString())
				} else {
					formData.append(key, String(value))
				}
			}
		}

		// Обрабатываем attachments
		if (data.attachments) {
			data.attachments.forEach((item, index) => {
				formData.append(`attachments[${index}][title]`, item.title)
			})
		}

		// Обрабатываем файл с изображением
		if (data.logo && data.logo) {
			formData.append('logo', data.logo)
		}

		const res = await fetch('/api/generate-doc', {
			method: 'POST',
			body: formData,
		})

		if (!res.ok) {
			alert('Не удалось сгенерировать документ')
			return
		}

		const blob = await res.blob()
		const url = URL.createObjectURL(blob)

		const a = document.createElement('a')
		a.href = url
		a.download = 'letter.docx'
		a.click()
		URL.revokeObjectURL(url)
	}

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setValue('logo', e.target.files[0])
		}
	}

	return {
		register,
		errors,
		attachArray,
		handleSubmit,
		createLetter,
		handleImageChange,
	}
}

export default useDataForm
