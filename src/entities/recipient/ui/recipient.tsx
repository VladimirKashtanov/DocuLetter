import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'

interface IRecipient {
	readonly className?: string
}

export const Recipient: FC<IRecipient> = props => {
	const { className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[550px]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты организации отправителя
			</h2>

			<TextBox label='Организационно-правовая форма' error='' />
			<TextBox label='Фирменное название' error='' />
			<TextBox label='Адрес организации' error='' />
			<TextBox label='Телефон организации' error='' />
			<TextBox label='E-mail организации' error='' />
			<TextBox label='E-mail организации' error='' />
			<div className='flex justify-between'>
				<TextBox label='ИНН организации' error='' className='w-[48%]' />
				<TextBox label='ОГРН организации' error='' className='w-[48%]' />
			</div>
		</div>
	)
}

export default Recipient
