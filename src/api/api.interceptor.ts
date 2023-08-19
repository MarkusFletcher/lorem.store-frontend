import { errorCatch, getContentType } from './api.helper'
import {
	getAccessToken,
	removeUserFromStorage,
} from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import axios from 'axios'

export const api = axios.create({
	baseURL: process.env.SERVER_URL,
	headers: getContentType(),
})

api.interceptors.request.use(async request => {
	const accessToken: string | null = getAccessToken()

	if (request.headers && accessToken) {
		request.headers.Authorization = `Bearer ${accessToken}`
	}

	return request
})

api.interceptors.response.use(
	response => response,
	async err => {
		const originalRequest = err.config

		if (
			(err?.response?.status === 401 ||
				errorCatch(err) === 'jwr expired' ||
				errorCatch(err) === 'jwr must be provided') &&
			originalRequest &&
			!originalRequest._isRetry
		) {
			originalRequest._isRetry = true
			try {
				await AuthService.getNewTokens()
				return api.request(originalRequest)
			} catch (catchErr) {
				if (errorCatch(catchErr) === 'jwr expired') {
					removeUserFromStorage()
				}
			}
		}

		throw err
	}
)
