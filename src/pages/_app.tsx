import Layout from './layout'
import '@assets/styles/globals.css'
import { TypeComponentAuthFields } from '@interface/auth-page.type'
import { AppProvider } from '@providers/AppProvider'
import { AuthProvider } from '@providers/auth/AuthProvider'
import type { AppProps } from 'next/app'

export default function App({
	Component,
	pageProps,
}: AppProps & TypeComponentAuthFields) {
	return (
		<AppProvider>
			<AuthProvider Component={{ forUserOnly: Component.forUserOnly }}>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthProvider>
		</AppProvider>
	)
}
