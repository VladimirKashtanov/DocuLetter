import clsx from 'clsx'
import React, { forwardRef, TextareaHTMLAttributes, useId } from 'react'

interface ITextArea extends TextareaHTMLAttributes<HTMLTextAreaElement> {
	readonly label?: string
	readonly error?: string
	readonly className?: string
}

export const Component = (
	props: ITextArea,
	ref: React.Ref<HTMLTextAreaElement>
) => {
	const { label, error, className, ...textAreaProps } = props

	const id = useId()

	return (
		<div className={clsx('flex flex-col gap-0', className)}>
			{label && (
				<label htmlFor={id} className='text-md text-white px-2'>
					{label}
				</label>
			)}

			<textarea
				{...textAreaProps}
				id={id}
				ref={ref}
				className='rounded outline-1 outline-emerald-500 text-emerald-950 bg-teal-100 text-md py-1 px-2 min-h-[150px]'
			/>

			{error && (
				<div className='text-sm font-md text-red-100 px-2'>{error}</div>
			)}
		</div>
	)
}

export const TextArea = forwardRef<HTMLTextAreaElement, ITextArea>(Component)
TextArea.displayName = 'TextArea'
export default TextArea
