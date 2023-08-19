import { getRefreshToken, saveUserToStorage } from './auth.helper'
import { getContentType } from '@/api/api.helper'
import { api } from '@/api/api.interceptor'
import {
	IAuthAxiosResponse,
	IAuthResponseData,
	ILoginData,
	IRegisterData,
} from '@interface/user.interface'
import axios from 'axios'

const AUTH_URL = 'auth'

export class AuthService {
	static async register(data: IRegisterData): Promise<IAuthAxiosResponse> {
		const response = await api.post<
			IAuthResponseData,
			IAuthAxiosResponse,
			IRegisterData
		>(`${process.env.SERVER_URL}/${AUTH_URL}/register`, data, {
			headers: getContentType(),
		})

		if (response.data.accessToken) {
			saveUserToStorage(response.data)
		}

		return response
	}

	static async login(data: ILoginData): Promise<IAuthAxiosResponse> {
		const response = await api.post<
			IAuthResponseData,
			IAuthAxiosResponse,
			ILoginData
		>(`${process.env.SERVER_URL}/${AUTH_URL}/login`, data, {
			headers: getContentType(),
		})

		if (response.data.accessToken) {
			saveUserToStorage(response.data)
		}

		return response
	}

	static async getNewTokens(): Promise<IAuthAxiosResponse | null> {
		const refreshToken: string | null = getRefreshToken()

		if (!refreshToken) return null

		const response = await api.post<string, IAuthAxiosResponse>(
			`${process.env.SERVER_URL}/${AUTH_URL}/access-token`,
			{ refreshToken },
			{
				headers: getContentType(),
			}
		)

		if (response.data.accessToken) {
			saveUserToStorage(response.data)
		}

		return response
	}
}
