import { DocumentImg } from '@/shared/document-img'

export const Logo = () => {
	return (
		<div className='flex flex-col gap-0 text-teal-50'>
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
