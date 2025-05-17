import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'

interface ISender {
	readonly className?: string
}

export const Sender: FC<ISender> = props => {
	const { className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты отправителя
			</h2>

			<TextBox label='Фамилия' error='' />
			<TextBox label='Имя' error='' />
			<TextBox label='Отчество' error='' />
			<TextBox label='Должность' error='' />
		</div>
	)
}

export default Sender
