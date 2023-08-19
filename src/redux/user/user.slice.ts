import { checkAuth, login, logout, register } from './user.actions'
import { IUserInitialState } from '@interface/user.interface'
import { createSlice } from '@reduxjs/toolkit'
import { getLocalStorage } from '@utils/getLocalStorage'

const initialState: IUserInitialState = {
	// user: localStorage.getItem('user')
	//   ? JSON.parse(localStorage.getItem('user') as string)
	//   : null,
	user: getLocalStorage('user'),
	isLoading: false,
	error: null,
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(register.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
				state.error = null
			})
			.addCase(register.rejected, state => {
				state.isLoading = false
				state.error = 'Ошибка при регистрации'
			})
			.addCase(login.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(login.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
				state.error = null
			})
			.addCase(login.rejected, state => {
				state.isLoading = false
				state.error = 'Ошибка при входе'
			})
			.addCase(logout.pending, state => {
				state.isLoading = true
				state.error = null
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false
				state.user = null
				state.error = null
			})
			.addCase(logout.rejected, state => {
				state.isLoading = false
				state.error = 'Ошибка при выходе'
			})
			.addCase(checkAuth.fulfilled, (state, action) => {
				state.isLoading = false
				state.user = action.payload.user
				state.error = null
			})
	},
})
