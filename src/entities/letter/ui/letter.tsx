import { DataForm } from '@/features/data-form/validation'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { FieldErrors, UseFormRegister } from 'react-hook-form'

interface ILetter {
	readonly register: UseFormRegister<DataForm>
	readonly errors: FieldErrors<DataForm>

	readonly className?: string
}

export const Letter: FC<ILetter> = props => {
	const { register, errors, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Идентификационные данные письма
			</h2>

			<TextBox
				label='Номер отправления'
				error={errors.number?.message}
				{...register('number', { required: true })}
			/>
			<TextBox
				label='Дата письма-запроса (при наличии)'
				type='date'
				error={errors.receivedDate?.message}
				{...register('receivedDate')}
			/>
			<TextBox
				label='Номер отправления письма-запроса (при наличии)'
				error={errors.rNumber?.message}
				{...register('rNumber')}
			/>

			<div className='rounded bg-emerald-400 w-[100%] h-1 mt-3' />
		</div>
	)
}

export default Letter
