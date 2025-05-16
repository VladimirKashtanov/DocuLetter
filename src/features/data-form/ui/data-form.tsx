import { Recipient } from '@/entities/recipient'
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
				'w-[900px] flex flex-col items-center gap-5 px-10 py-5 bg-emerald-400 text-white rounded-xl',
				className
			)}
		>
			<Recipient />

			<div></div>

			<div></div>

			<div></div>

			<div></div>
		</form>
	)
}

export default DataForm
