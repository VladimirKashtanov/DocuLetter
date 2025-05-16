import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'

interface IRecipient {
	readonly className?: string
}

export const Recipient: FC<IRecipient> = props => {
	const { className } = props

	return (
		<div className={clsx('flex flex-col w-[500px]', className)}>
			<h2 className='self-center text-xl font-bold mb-2'>
				Реквизиты компании отправителя
			</h2>

			<TextBox label='Организационно-правовая форма' error='qwewfregrfhg' />
			<TextBox label='Фирменное название' error='qwewfregrfhg' />
		</div>
	)
}

export default Recipient
