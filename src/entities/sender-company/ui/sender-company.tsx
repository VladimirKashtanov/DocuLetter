import { DataFormContentType } from '@/features/data-form/type'
import { FileBox } from '@/shared/file-box'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { ChangeEvent, FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface ISenderCompany {
	readonly register: UseFormRegister<DataFormContentType>
	readonly handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void
	readonly className?: string
}

export const SenderCompany: FC<ISenderCompany> = props => {
	const { register, handleImageChange, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты организации отправителя
			</h2>

			<FileBox
				label='Логотип организации (при наличии)'
				error=''
				handleImageChange={handleImageChange}
			/>

			<TextBox
				label='Организационно-правовая форма'
				error=''
				{...register('companyOrganizationalForm')}
			/>

			<TextBox
				label='Фирменное название'
				error=''
				{...register('companyFirmName')}
			/>

			<TextBox label='Адрес организации' error='' {...register('address')} />

			<div className='flex justify-between'>
				<TextBox
					label='Телефон организации'
					type='phone'
					error=''
					{...register('companyPhone')}
					className='w-[48%]'
				/>

				<TextBox
					label='E-mail организации'
					type='email'
					error=''
					{...register('companyEmail')}
					className='w-[48%]'
				/>
			</div>

			<div className='flex justify-between'>
				<TextBox
					label='ИНН организации'
					error=''
					{...register('INN')}
					className='w-[48%]'
				/>

				<TextBox
					label='ОГРН организации'
					error=''
					{...register('OGRN')}
					className='w-[48%]'
				/>
			</div>
		</div>
	)
}

export default SenderCompany
