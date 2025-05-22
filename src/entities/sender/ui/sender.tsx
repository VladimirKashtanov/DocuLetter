import { DataForm } from '@/features/data-form/validation'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface ISender {
	readonly register: UseFormRegister<DataForm>
	readonly errors: FieldErrors<DataForm>
	readonly className?: string
}

export const Sender: FC<ISender> = props => {
	const { register, errors, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты отправителя
			</h2>

			<TextBox
				label='Фамилия'
				error={errors.senderSName?.message}
				{...register('senderSName', { required: true })}
			/>
			<TextBox
				label='Имя'
				error={errors.senderFName?.message}
				{...register('senderFName', { required: true })}
			/>
			<TextBox
				label='Отчество'
				error={errors.senderPatronymic?.message}
				{...register('senderPatronymic', { required: true })}
			/>
			<TextBox
				label='Должность'
				error={errors.senderGrade?.message}
				{...register('senderGrade', { required: true })}
			/>

			<div className='rounded bg-emerald-400 w-[100%] h-1 mt-3' />
		</div>
	)
}

export default Sender
