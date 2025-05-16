import { Recipient } from '@/entities/recipient'
import clsx from 'clsx'
import { FC } from 'react'

interface IDataForm {
	readonly className?: string
}

export const DataForm: FC<IDataForm> = props => {
	const { className } = props

	return (
		<form className={clsx('w-[100%] flex flex-col gap-5', className)}>
			<Recipient />

			<div></div>

			<div></div>

			<div></div>

			<div></div>
		</form>
	)
}

export default DataForm
