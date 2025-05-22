import { DataForm } from '@/features/data-form/validation'
import { TextArea } from '@/shared/text-area'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface IAttachment {
	readonly register: UseFormRegister<DataForm>
	readonly errors: FieldErrors<DataForm>
	readonly index: number
	readonly className?: string
}

export const Attachment: FC<IAttachment> = props => {
	const { register, errors, index, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Текстовое приложение {index + 1}
			</h2>

			<TextBox
				label='Заголовок'
				error={errors.attachments?.[index]?.title?.message}
				{...register(`attachments.${index}.title`, { required: true })}
			/>
			<TextArea
				label='Содержание'
				error={errors.attachments?.[index]?.content?.message}
				{...register(`attachments.${index}.content`, { required: true })}
			/>
		</div>
	)
}

export default Attachment
