import { api } from '@/api/api.interceptor'
import {
	ICategory,
	ICategoryCreateData,
	ICategoryUpdateData,
} from '@interface/category.interface'
import { AxiosResponse } from 'axios'

const CATEGORY_URL = 'category'

export class CategoryService {
	static async getById(id: string | number): Promise<AxiosResponse<ICategory>> {
		return await api<ICategory>({
			url: `${CATEGORY_URL}${id}`,
			method: 'GET',
		})
	}

	static async create(
		data: ICategoryCreateData
	): Promise<AxiosResponse<ICategory>> {
		return await api<ICategory>({
			url: CATEGORY_URL,
			method: 'POST',
			data,
		})
	}

	static async update(
		id: string | number,
		data: ICategoryUpdateData
	): Promise<AxiosResponse<ICategory>> {
		return await api<ICategory>({
			url: `${CATEGORY_URL}/${id}`,
			method: 'PUT',
			data,
		})
	}

	static async remove(
		id: string | number
	): Promise<AxiosResponse<{ message: string }>> {
		return await api<{ message: string }>({
			url: `${CATEGORY_URL}/${id}`,
			method: 'DELETE',
		})
	}
}
