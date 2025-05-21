import { DataFormContentType } from '@/features/data-form/type'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface IRecipient {
	readonly register: UseFormRegister<DataFormContentType>
	readonly className?: string
}

export const Recipient: FC<IRecipient> = props => {
	const { register, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты получателя
			</h2>

			<TextBox
				label='Должность, организация, ФИО (в родительном падеже)'
				error=''
				{...register('recipient')}
			/>
			<TextBox
				label='Телефон'
				type='phone'
				error=''
				{...register('recipientPhone')}
			/>
		</div>
	)
}

export default Recipient
