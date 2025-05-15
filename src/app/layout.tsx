import { FC } from 'react'
import './global.css'

interface IRootLayout {
	readonly children: React.ReactNode
}

const RootLayout: FC<IRootLayout> = props => {
	const { children } = props

	return (
		<html lang='en'>
			<body className='antialiased text-teal-950'>{children}</body>
		</html>
	)
}

export default RootLayout
