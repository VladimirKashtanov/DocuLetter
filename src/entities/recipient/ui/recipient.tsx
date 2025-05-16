import clsx from 'clsx'
import { FC } from 'react'

interface IRecipient {
	readonly className?: string
}

export const Recipient: FC<IRecipient> = props => {
	const { className } = props

	return (
		<div className={clsx('rounded bg-emerald-400', className)}>
			<div>qesrdgf</div>
		</div>
	)
}
