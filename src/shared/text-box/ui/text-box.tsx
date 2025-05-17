import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes, useId } from 'react'

interface ITextBox extends InputHTMLAttributes<HTMLInputElement> {
	readonly label?: string
	readonly error?: string
	readonly type?: 'text' | 'date' | 'phone' | 'email'
	readonly className?: string
}

const Component = (props: ITextBox, ref: React.Ref<HTMLInputElement>) => {
	const { label, error, type, className, ...inputProps } = props

	const id = useId()

	return (
		<div className={clsx('flex flex-col gap-0', className)}>
			{label && (
				<label htmlFor={id} className='text-md text-white px-2'>
					{label}
				</label>
			)}

			<input
				{...inputProps}
				id={id}
				ref={ref}
				type={type}
				className='rounded outline-1 outline-emerald-500 text-emerald-950 bg-teal-100 text-md py-1 px-2'
			/>

			{error && (
				<div className='text-sm font-bold text-red-500 px-2'>{error}</div>
			)}
		</div>
	)
}

export const TextBox = forwardRef<HTMLInputElement, ITextBox>(Component)
TextBox.displayName = 'TextBox'
export default TextBox
