import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes, useId } from 'react'

interface ITextBox extends InputHTMLAttributes<HTMLInputElement> {
	readonly label?: string
	readonly error?: string
	readonly className?: string
}

const Component = (props: ITextBox, ref: React.Ref<HTMLInputElement>) => {
	const { label, error, className, ...inputProps } = props

	const id = useId()

	return (
		<div className={clsx('flex flex-col gap-0', className)}>
			{label && (
				<label htmlFor={id} className='text-md'>
					{label}
				</label>
			)}

			<input
				{...inputProps}
				id={id}
				ref={ref}
				className='rounded outline-0 bg-cyan-100 text-md p-1'
			/>

			{error && <div className='text-sm font-bold text-red-500'>{error}</div>}
		</div>
	)
}

export const TextBox = forwardRef<HTMLInputElement, ITextBox>(Component)
TextBox.displayName = 'TextBox'
export default TextBox
