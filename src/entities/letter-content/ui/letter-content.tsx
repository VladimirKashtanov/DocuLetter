import { DataFormContentType } from '@/features/data-form/type'
import { TextArea } from '@/shared/text-area'
import { TextBox } from '@/shared/text-box'
import clsx from 'clsx'
import { FC } from 'react'
import { UseFormRegister } from 'react-hook-form'

interface ILetterContent {
	readonly register: UseFormRegister<DataFormContentType>
	readonly className?: string
}

export const LetterContent: FC<ILetterContent> = props => {
	const { register, className } = props

	return (
		<div className={clsx('flex flex-col gap-3 w-[100%]', className)}>
			<h2 className='self-center text-xl font-bold text-white'>
				Содержание письма
			</h2>

			<TextBox label='Приветствие' error='' {...register('header')} />
			<TextArea label='Информативная часть' error='' {...register('body')} />
		</div>
	)
}

export default LetterContent
