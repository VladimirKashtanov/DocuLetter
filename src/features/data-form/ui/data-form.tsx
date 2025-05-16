import clsx from 'clsx'
import { FC } from 'react'

interface IDataForm {
	readonly className?: string
}

export const DataForm: FC<IDataForm> = props => {
	const { className } = props

	return (
		<form className={clsx('', className)}>
			<div>qwewretrytuyhfj</div>
		</form>
	)
}

export default DataForm
