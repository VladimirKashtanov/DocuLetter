import { FC } from 'react'
import './global.css'

interface IRootLayout {
	readonly children: React.ReactNode
}

const RootLayout: FC<IRootLayout> = props => {
	const { children } = props

	return (
		<html lang='en'>
			<body className='antialiased min-h-screen'>{children}</body>
		</html>
	)
}

export default RootLayout
