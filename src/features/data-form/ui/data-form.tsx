'use client'

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

	const dataForm = useDataForm()

	return (
		<form
			onSubmit={dataForm.handleSubmit(data => dataForm.createLetter(data))}
			className={clsx(
				'w-[750px] flex flex-col items-center gap-10 px-10 py-5 bg-emerald-500 text-white rounded-xl border border-emerald-500 shadow-2xs shadow-emerald-500',
				className
			)}
		>
			<div className='flex flex-col gap-5 w-[100%]'>
				<SenderCompany
					register={dataForm.register}
					handleImageChange={dataForm.handleImageChange}
				/>
				<div className='rounded bg-emerald-600 w-[100%] h-[2px]' />
			</div>

			<div className='flex flex-col gap-5 w-[100%]'>
				<Sender register={dataForm.register} />
				<div className='rounded bg-emerald-600 w-[100%] h-[2px]' />
			</div>

			<div className='flex flex-col gap-5 w-[100%]'>
				<Recipient register={dataForm.register} />
				<div className='rounded bg-emerald-600 w-[100%] h-[2px]' />
			</div>

			<div className='flex flex-col gap-5 w-[100%]'>
				<Letter register={dataForm.register} />
				<div className='rounded bg-emerald-600 w-[100%] h-[2px]' />
			</div>

			<div className='flex flex-col gap-5 w-[100%]'>
				<LetterContent register={dataForm.register} />
				<div className='rounded bg-emerald-600 w-[100%] h-[2px]' />
			</div>

			<Button type='submit' className='font-semibold'>
				Сгенерировать
			</Button>
		</form>
	)
}

export default DataForm
