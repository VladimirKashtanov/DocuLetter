'use client'

import clsx from 'clsx'
import { forwardRef, InputHTMLAttributes, useId, useState } from 'react'

interface IFileBox extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
	readonly label?: string
	readonly error?: string
	readonly className?: string
}

const Component = (props: IFileBox, ref: React.Ref<HTMLInputElement>) => {
	const { label, error, className, ...inputProps } = props

	const id = useId()
	const [preview, setPreview] = useState<string | null>(null)

	const handleFileChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
		const file = event.target.files?.[0]
		if (file && file.type.startsWith('image/')) {
			const reader = new FileReader()
			reader.onloadend = () => {
				setPreview(reader.result as string)
			}
			reader.readAsDataURL(file)
		} else {
			setPreview(null)
		}
	}

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
				type={'file'}
				accept={'image/*'}
				onChange={handleFileChanged}
				className='cursor-pointer rounded outline-1 outline-emerald-500 text-emerald-800 bg-teal-100 text-md py-1 px-2'
			/>

			{error && (
				<div className='text-sm font-bold text-red-500 px-2'>{error}</div>
			)}

			{preview && (
				<img
					src={preview}
					alt='Предпросмотр'
					className='rounded border border-emerald-600 my-1 w-[150px] max-w-120px]'
				/>
			)}
		</div>
	)
}

export const FileBox = forwardRef<HTMLInputElement, IFileBox>(Component)
FileBox.displayName = 'FileBox'
export default FileBox
