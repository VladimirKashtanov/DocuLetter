'use client'

import { Attachment } from '@/entities/attachment'
import { Letter } from '@/entities/letter'
import { LetterContent } from '@/entities/letter-content'
import { Recipient } from '@/entities/recipient'
import { Sender } from '@/entities/sender'
import { SenderCompany } from '@/entities/sender-company'
import { Button } from '@/shared/button'
import clsx from 'clsx'
import { FC } from 'react'
import { useDataForm } from '../model'

interface IDataForm {
	readonly className?: string
}

export const DataForm: FC<IDataForm> = props => {
	const { className } = props

	const {
		handleSubmit,
		createLetter,
		register,
		handleImageChange,
		attachArray,
	} = useDataForm()

	return (
		<form
			onSubmit={handleSubmit(data => createLetter(data))}
			className={clsx(
				'w-[750px] flex flex-col items-center gap-10 px-10 py-5 bg-emerald-500 text-white rounded-xl border border-emerald-500 shadow-2xs shadow-emerald-500',
				className
			)}
		>
			<SenderCompany
				register={register}
				handleImageChange={handleImageChange}
			/>
			<Sender register={register} />
			<Recipient register={register} />
			<Letter register={register} />
			<LetterContent register={register} />

			<div className='flex flex-col gap-3 w-[100%]'>
				{attachArray.fields.map((field, index) => (
					<div key={field.id} className='w-[100%] flex flex-col gap-3'>
						<Attachment register={register} index={index} />

						<Button
							type='button'
							onClick={() => attachArray.remove(index)}
							className='bg-rose-400 border border-rose-300 outline-none self-start'
						>
							Удалить приложение
						</Button>

						<div className='rounded bg-emerald-400 w-[100%] h-1 mt-3' />
					</div>
				))}
				<Button
					type='button'
					onClick={() => attachArray.append({ title: '', content: '' })}
					className='bg-emerald-600 border border-emerald-400 outline-none self-start'
				>
					Добавить приложение
				</Button>
			</div>

			<Button type='submit' className='font-semibold'>
				Сгенерировать
			</Button>
		</form>
	)
}

export default DataForm
