import { IOrder } from './order.interface'
import { IProductFavorite } from './product.interface'
import { AxiosResponse } from 'axios'

export interface IUser {
	id: number
	email: string
	login: string
	name: string
	avatarPath: string
	phone: string
}

export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface ILoginData {
	login: string
	password: string
}

export interface IRegisterData {
	email: string
	login: string
	password: string
	name?: string
	phone?: string
}

export interface IUserProfile extends IUser {
	favorites: IProductFavorite[]
	orders: IOrder[]
}

export interface IUserProfileUpdateData extends Partial<IRegisterData> {
	avatarPath: string
}

export interface IAuthResponseData extends ITokens {
	user: IUser
}

export interface IAuthAxiosResponse extends AxiosResponse<IAuthResponseData> {}

export interface IUserState {
	email: string
	login: string
}

export interface IUserInitialState {
	user: IUserState | null
	isLoading: boolean
	error: string | null
}
