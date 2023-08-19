import { api } from '@/api/api.interceptor'
import { IOrder } from '@interface/order.interface'
import { AxiosResponse } from 'axios'

const ORDER_URL = 'order'

export class OrderService {
	static async getAllByUser(): Promise<AxiosResponse<IOrder[]>> {
		return await api({
			url: `${ORDER_URL}/user`,
			method: 'GET',
		})
	}
}
