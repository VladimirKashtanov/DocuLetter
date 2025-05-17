import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'

interface ILetterContent {
	readonly className?: string
}

export const LetterContent: FC<ILetterContent> = props => {
	const { className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Содержание письма
			</h2>

			<TextBox label='Приветствие' error='' />
			<TextBox label='Информативная часть' error='' />
		</div>
	)
}

export default LetterContent
