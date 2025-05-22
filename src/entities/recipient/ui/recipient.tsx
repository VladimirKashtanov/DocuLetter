import { DataForm } from '@/features/data-form/validation'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface IRecipient {
	readonly register: UseFormRegister<DataForm>
	readonly errors: FieldErrors<DataForm>

	readonly className?: string
}

export const Recipient: FC<IRecipient> = props => {
	const { register, errors, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты получателя
			</h2>

			<TextBox
				label='Должность, организация, ФИО (в дательном падеже)'
				error={errors.recipient?.message}
				{...register('recipient', { required: true })}
			/>
			<TextBox
				label='Телефон'
				type='phone'
				error={errors.recipientPhone?.message}
				{...register('recipientPhone', { required: true })}
			/>

			<div className='rounded bg-emerald-400 w-[100%] h-1 mt-3' />
		</div>
	)
}

export default Recipient
