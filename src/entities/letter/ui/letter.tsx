import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'

interface ILetter {
	readonly className?: string
}

export const Letter: FC<ILetter> = props => {
	const { className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Идентификационные данные письма
			</h2>

			<TextBox label='Номер отправления' error='' />
			<TextBox label='Дата письма-запроса (при наличии)' type='date' error='' />
			<TextBox
				label='Номер отправления письма-запроса (при наличии)'
				error=''
			/>
		</div>
	)
}

export default Letter
