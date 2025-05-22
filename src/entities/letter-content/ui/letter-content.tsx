import { DataForm } from '@/features/data-form/validation'
import { TextArea } from '@/shared/text-area'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface ILetterContent {
	readonly register: UseFormRegister<DataForm>
	readonly errors: FieldErrors<DataForm>

	readonly className?: string
}

export const LetterContent: FC<ILetterContent> = props => {
	const { register, errors, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Содержание письма
			</h2>

			<TextBox
				label='Приветствие'
				error={errors.header?.message}
				{...register('header', { required: true })}
			/>
			<TextArea
				label='Содержательная часть'
				error={errors.bodyContent?.message}
				{...register('bodyContent', { required: true })}
			/>

			<div className='rounded bg-emerald-400 w-[100%] h-1 mt-3' />
		</div>
	)
}

export default LetterContent
