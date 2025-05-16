import { DataForm } from '@/features/data-form'
import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export default function HomePage() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />

			<main className='flex-grow flex flex-col items-center justify-center px-40 py-12 text-emerald-900'>
				<h1 className='font-bold text-3xl'>Давайте создадим деловое письмо</h1>
				<DataForm />
			</main>

			<Footer />
		</div>
	)
}
