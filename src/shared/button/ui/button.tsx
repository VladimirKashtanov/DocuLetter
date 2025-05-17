import clsx from 'clsx'
import { ButtonHTMLAttributes, FC } from 'react'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
	readonly children: React.ReactNode
	readonly className?: string
}

export const Button: FC<IButton> = props => {
	const { children, className, ...buttonProps } = props

	return (
		<button
			{...buttonProps}
			className={clsx(
				'cursor-pointer flex justify-center items-center py-1 px-2 text-emerald-50 hover:text-emerald-100 rounded outline-1',
				className
			)}
		>
			{children}
		</button>
	)
}

export default Button
