import { errorCatch } from '@/api/api.helper'
import { removeUserFromStorage } from '@/services/auth/auth.helper'
import { AuthService } from '@/services/auth/auth.service'
import {
	IAuthResponseData,
	ILoginData,
	IRegisterData,
} from '@interface/user.interface'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const register = createAsyncThunk<IAuthResponseData, IRegisterData>(
	'auth/register',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.register(data)
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err)
		}
	}
)

export const login = createAsyncThunk<IAuthResponseData, ILoginData>(
	'auth/login',
	async (data, thunkApi) => {
		try {
			const response = await AuthService.login(data)
			return response.data
		} catch (err) {
			return thunkApi.rejectWithValue(err)
		}
	}
)

export const logout = createAsyncThunk<void, void>(
	'auth/loguot',
	async (_, thunkApi) => {
		try {
			removeUserFromStorage()
		} catch (err) {
			return thunkApi.rejectWithValue(err)
		}
	}
)

export const checkAuth = createAsyncThunk<IAuthResponseData, void>(
	'auth/check-auth',
	async (_, thunkApi) => {
		try {
			const response = await AuthService.getNewTokens()
			if (response === null) {
				throw new Error('Вы не авторизированы')
			}
			return response.data
		} catch (err) {
			if (errorCatch(err) === 'jwt expired') {
				thunkApi.dispatch(logout())
			}
			return thunkApi.rejectWithValue(err)
		}
	}
)
