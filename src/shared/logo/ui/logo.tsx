import { DocumentImg } from '@/shared/document-img'
import clsx from 'clsx'
import { FC } from 'react'

interface ILogo {
	readonly className?: string
}

export const Logo: FC<ILogo> = props => {
	const { className } = props

	return (
		<div className={clsx('flex flex-col gap-0 text-teal-50', className)}>
			<div className='flex gap-1 justify-center'>
				<DocumentImg />
				<div className='font-extrabold text-2xl'>DocuLetter</div>
			</div>

			<div className='font-medium opacity-90'>
				Онлайн-сервис для генерации деловых писем
			</div>
		</div>
	)
}

export default Logo
