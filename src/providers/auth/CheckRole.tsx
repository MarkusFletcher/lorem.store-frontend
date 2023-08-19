import { useAuth } from '@/hooks/useAuth'
import { TypeComponentAuthFields } from '@interface/auth-page.type'
import { useRouter } from 'next/router'
import { PropsWithChildren } from 'react'

export const CheckRole: React.FC<
	PropsWithChildren<TypeComponentAuthFields>
> = ({ Component: { forUserOnly }, children }) => {
	const { user } = useAuth()

	const router = useRouter()

	if (user && forUserOnly) return <>{children}</>

	router.pathname !== '/auth' && router.replace('/auth')
	return null
}
