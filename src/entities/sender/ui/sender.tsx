import { DataFormContentType } from '@/features/data-form/type'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface ISender {
	readonly register: UseFormRegister<DataFormContentType>
	readonly className?: string
}

export const Sender: FC<ISender> = props => {
	const { register, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты отправителя
			</h2>

			<TextBox label='Фамилия' error='' {...register('senderSName')} />
			<TextBox label='Имя' error='' {...register('senderFName')} />
			<TextBox label='Отчество' error='' {...register('senderPatronymic')} />
			<TextBox label='Должность' error='' {...register('senderGrade')} />
		</div>
	)
}

export default Sender
