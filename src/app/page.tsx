import { Footer } from '@/widgets/footer'
import { Header } from '@/widgets/header'

export default function HomePage() {
	return (
		<div className='min-h-screen flex flex-col'>
			<Header />

			<main className='flex-grow'></main>

			<Footer />
		</div>
	)
}
