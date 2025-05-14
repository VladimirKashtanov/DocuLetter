import { FC } from 'react'

interface IRootLayout {
	readonly children: React.ReactNode
}

const RootLayout: FC<IRootLayout> = props => {
	const { children } = props

	return (
		<html lang='en'>
			<body className='antialiased'>{children}</body>
		</html>
	)
}

export default RootLayout
