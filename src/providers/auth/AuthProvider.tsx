import { useAuth } from '@hooks/useAuth'
import { TypeComponentAuthFields } from '@interface/auth-page.type'
import { useActions } from '@redux/hooks'
import { getAccessToken, getRefreshToken } from '@services/auth/auth.helper'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { PropsWithChildren, useEffect } from 'react'

const DynamicCheckRole = dynamic(
	() => import('./CheckRole').then(module => module.CheckRole),
	{
		ssr: false,
	}
)

export const AuthProvider: React.FC<
	PropsWithChildren<TypeComponentAuthFields>
> = ({ Component: { forUserOnly }, children }) => {
	const { checkAuth, logout } = useActions()
	const { user } = useAuth()

	const { pathname } = useRouter()

	useEffect(() => {
		const accessToken = getAccessToken()
		if (accessToken) checkAuth()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		const refreshToken = getRefreshToken()
		if (!refreshToken && user) logout()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname])

	return forUserOnly ? (
		<DynamicCheckRole Component={{ forUserOnly }}>{children}</DynamicCheckRole>
	) : (
		<>{children}</>
	)
}
