import { DataFormContentType } from '@/features/data-form/type'
import { TextArea } from '@/shared/text-area'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface IAttachment {
	readonly register: UseFormRegister<DataFormContentType>
	readonly index: number
	readonly className?: string
}

export const Attachment: FC<IAttachment> = props => {
	const { register, index, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Текстовое приложение {index + 1}
			</h2>

			<TextBox
				label='Заголовок'
				error=''
				{...register(`attachments.${index}.title`)}
			/>
			<TextArea
				label='Содержание'
				error=''
				{...register(`attachments.${index}.content`)}
			/>
		</div>
	)
}

export default Attachment
