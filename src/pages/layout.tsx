import { Inter, Sora } from 'next/font/google'
import { PropsWithChildren } from 'react'

const inter = Inter({ subsets: ['latin'] })
const sora = Sora({ subsets: ['latin'] })

export default function Layout({ children }: PropsWithChildren) {
	return (
		<>
			<main className={`${sora.className}`}>{children}</main>
		</>
	)
}
