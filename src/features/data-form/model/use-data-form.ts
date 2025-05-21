import { useFieldArray, useForm } from 'react-hook-form'
import { DataFormContentType } from '../type'

export const useDataForm = () => {
	const { control, register, handleSubmit, setValue } =
		useForm<DataFormContentType>()

	const attachArray = useFieldArray({
		control,
		name: 'attachments',
	})

	const createLetter = async (data: DataFormContentType) => {
		const formData = new FormData()

		for (const [key, value] of Object.entries(data)) {
			if (key !== 'logo') {
				formData.append(key, String(value))
			}
		}

		if (data.logo && data.logo[0]) {
			formData.append('logo', data.logo[0])
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
			setValue('logo', e.target.files)
		}
	}

	return {
		register,
		attachArray,
		handleSubmit,
		createLetter,
		handleImageChange,
	}
}

export default useDataForm
