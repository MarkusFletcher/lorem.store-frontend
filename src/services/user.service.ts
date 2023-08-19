import { api } from '@/api/api.interceptor'
import {
	IUserProfileUpdateData,
	IRegisterData,
	IUser,
	IUserProfile,
} from '@interface/user.interface'
import { AxiosResponse } from 'axios'

const USER_URL = 'user'

export class UserService {
	static async getProfile(): Promise<AxiosResponse<IUserProfile>> {
		return await api({
			url: `${USER_URL}/profile`,
			method: 'GET',
		})
	}

	static async updateProfile(
		data: IUserProfileUpdateData
	): Promise<AxiosResponse<IUser>> {
		return await api<IUser>({
			url: `${USER_URL}/profile`,
			method: 'PUT',
			data,
		})
	}

	static async toggleFavorites(
		productId: string | number
	): Promise<AxiosResponse<IUser>> {
		return await api<IUser>({
			url: `${USER_URL}/profile/favorites/${productId}`,
			method: 'PATCH',
		})
	}
}
