import { FileBox } from '@/shared/file-box'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'

interface ISenderCompany {
	readonly className?: string
}

export const SenderCompany: FC<ISenderCompany> = props => {
	const { className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты организации отправителя
			</h2>

			<FileBox label='Логотип организации (при наличии)' error='' />
			<TextBox label='Организационно-правовая форма' error='' />
			<TextBox label='Фирменное название' error='' />
			<TextBox label='Адрес организации' error='' />

			<div className='flex justify-between'>
				<TextBox label='Телефон организации' error='' className='w-[48%]' />
				<TextBox label='E-mail организации' error='' className='w-[48%]' />
			</div>

			<div className='flex justify-between'>
				<TextBox label='ИНН организации' error='' className='w-[48%]' />
				<TextBox label='ОГРН организации' error='' className='w-[48%]' />
			</div>
		</div>
	)
}

export default SenderCompany
