import { DataForm } from '@/features/data-form/validation'
import { FileBox } from '@/shared/file-box'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { ChangeEvent, FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface ISenderCompany {
	readonly register: UseFormRegister<DataForm>
	readonly errors: FieldErrors<DataForm>
	readonly handleImageChange: (e: ChangeEvent<HTMLInputElement>) => void
	readonly className?: string
}

export const SenderCompany: FC<ISenderCompany> = props => {
	const { register, errors, handleImageChange, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты организации отправителя
			</h2>

			<FileBox
				label='Логотип организации (при наличии)'
				handleImageChange={handleImageChange}
			/>

			<TextBox
				label='Организационно-правовая форма'
				error={errors.companyOrganizationalForm?.message}
				{...register('companyOrganizationalForm', { required: true })}
			/>

			<TextBox
				label='Фирменное название'
				error={errors.companyFirmName?.message}
				{...register('companyFirmName', { required: true })}
			/>

			<TextBox
				label='Адрес организации'
				error={errors.address?.message}
				{...register('address', { required: true })}
			/>

			<div className='flex justify-between'>
				<TextBox
					label='Телефон организации'
					type='phone'
					error={errors.companyPhone?.message}
					{...register('companyPhone', { required: true })}
					className='w-[48%]'
				/>

				<TextBox
					label='E-mail организации'
					type='email'
					error={errors.companyEmail?.message}
					{...register('companyEmail', { required: true })}
					className='w-[48%]'
				/>
			</div>

			<div className='flex justify-between'>
				<TextBox
					label='ИНН организации'
					error={errors.INN?.message}
					{...register('INN', { required: true })}
					className='w-[48%]'
				/>

				<TextBox
					label='ОГРН организации'
					error={errors.OGRN?.message}
					{...register('OGRN', { required: true })}
					className='w-[48%]'
				/>
			</div>

			<div className='rounded bg-emerald-400 w-[100%] h-1 mt-3' />
		</div>
	)
}

export default SenderCompany
