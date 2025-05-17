import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'

interface IRecipient {
	readonly className?: string
}

export const Recipient: FC<IRecipient> = props => {
	const { className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Реквизиты получателя
			</h2>

			<TextBox label='Должность, ФИО (в родительном падеже)' error='' />
			<TextBox label='Телефон' error='' />
		</div>
	)
}

export default Recipient
