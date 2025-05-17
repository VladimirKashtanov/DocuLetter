import { Recipient } from '@/entities/recipient'
import { Sender } from '@/entities/sender'
import { SenderCompany } from '@/entities/sender-company'
import clsx from 'clsx'
import { FC } from 'react'

interface IDataForm {
	readonly className?: string
}

export const DataForm: FC<IDataForm> = props => {
	const { className } = props

	return (
		<form
			className={clsx(
				'w-[750px] flex flex-col items-center gap-10 px-10 py-5 bg-emerald-500 text-white rounded-xl border border-emerald-500 shadow-2xs shadow-emerald-500',
				className
			)}
		>
			<div className='flex flex-col gap-5 w-[100%]'>
				<SenderCompany />
				<div className='rounded bg-emerald-600 w-[100%] h-[3px]' />
			</div>

			<div className='flex flex-col gap-5 w-[100%]'>
				<Sender />
				<div className='rounded bg-emerald-600 w-[100%] h-[3px]' />
			</div>

			<div className='flex flex-col gap-5 w-[100%]'>
				<Recipient />
				<div className='rounded bg-emerald-600 w-[100%] h-[3px]' />
			</div>

			<div></div>
			<div></div>
		</form>
	)
}

export default DataForm
