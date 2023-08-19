import { IAuthResponseData, ITokens } from '@interface/user.interface'
import Cookies from 'js-cookie'

export const getAccessToken = (): string | null => {
	const token: string | undefined = Cookies.get('access-token')
	return token || null
}

export const getRefreshToken = (): string | null => {
	const token: string | undefined = Cookies.get('refresh-token')
	return token || null
}

export const saveTokens = (data: ITokens): void => {
	Cookies.set('access-token', data.accessToken)
	Cookies.set('refresh-token', data.refreshToken)
}

export const removeTokens = (): void => {
	Cookies.remove('access-token')
	Cookies.remove('refresh-token')
}

export const saveUserToStorage = (data: IAuthResponseData): void => {
	saveTokens(data)
	localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeUserFromStorage = (): void => {
	removeTokens()
	localStorage.removeItem('user')
}
