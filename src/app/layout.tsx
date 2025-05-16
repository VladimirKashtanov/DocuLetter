import { FC } from 'react'
import './global.css'

import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
	subsets: ['latin', 'cyrillic'],
	weight: ['400', '600', '700'],
	display: 'swap',
})

export const metadata = {
	title: 'DocuLetter',
	icons: {
		icon: '/favicon.svg',
	},
}

interface IRootLayout {
	readonly children: React.ReactNode
}

const RootLayout: FC<IRootLayout> = props => {
	const { children } = props

	return (
		<html lang='en'>
			<body
				className={`antialiased min-h-screen bg-sky-200 ${notoSans.className}`}
			>
				{children}
			</body>
		</html>
	)
}

export default RootLayout
