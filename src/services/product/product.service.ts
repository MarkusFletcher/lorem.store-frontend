import { api } from '@/api/api.interceptor'
import {
	IProduct,
	IProductCreateData,
	IProductFilters,
	IProductResponseData,
	IProductUpdateData,
} from '@interface/product.interface'
import { AxiosResponse } from 'axios'

const PRODUCT_URL = 'product'

export class ProductService {
	static async getById(id: string | number): Promise<AxiosResponse<IProduct>> {
		return await api<IProduct>({
			url: `${PRODUCT_URL}/${id}`,
			method: 'GET',
		})
	}

	static async getSimilar(
		id: string | number
	): Promise<AxiosResponse<IProduct[]>> {
		return await api({
			url: `${PRODUCT_URL}/similar/${id}`,
			method: 'GET',
		})
	}

	static async getAll(
		queryData: IProductFilters = {}
	): Promise<AxiosResponse<IProductResponseData>> {
		return await api<IProductResponseData>({
			url: PRODUCT_URL,
			method: 'GET',
			params: queryData,
		})
	}

	static async getByCategory(
		categoryCode: string | number
	): Promise<AxiosResponse<IProduct[]>> {
		return await api<IProduct[]>({
			url: `${PRODUCT_URL}/category/${categoryCode}`,
			method: 'GET',
		})
	}

	static async create(
		data: IProductCreateData
	): Promise<AxiosResponse<IProduct>> {
		return await api<IProduct>({
			url: PRODUCT_URL,
			method: 'POST',
			data,
		})
	}

	static async update(
		id: string | number,
		data: IProductUpdateData
	): Promise<AxiosResponse<IProduct>> {
		return await api<IProduct>({
			url: `${PRODUCT_URL}/${id}`,
			method: 'PUT',
			data,
		})
	}

	static async remove(
		id: string | number
	): Promise<AxiosResponse<{ message: string }>> {
		return await api<{ message: string }>({
			url: `${PRODUCT_URL}/${id}`,
			method: 'DELETE',
		})
	}
}
