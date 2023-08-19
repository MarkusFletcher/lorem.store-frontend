import { api } from '@/api/api.interceptor'
import { IReview, IReviewCreateData } from '@interface/review.interface'
import { AxiosResponse } from 'axios'

const REVIEW_URL = 'review'

export class ReviewService {
	static async getAll(): Promise<AxiosResponse<IReview[]>> {
		return await api({
			url: REVIEW_URL,
			method: 'GET',
		})
	}

	static async getById(id: string | number): Promise<AxiosResponse<IReview>> {
		console.log('productId >>>', id)
		return await api<IReview>({
			url: `${REVIEW_URL}/${id}`,
			method: 'GET',
		})
	}

	static async create(
		data: IReviewCreateData
	): Promise<AxiosResponse<IReview>> {
		return await api<IReview>({
			url: REVIEW_URL,
			method: 'POST',
			data,
		})
	}

	static async remove(
		id: string | number
	): Promise<AxiosResponse<{ message: string }>> {
		return await api<{ message: string }>({
			url: `${REVIEW_URL}/${id}`,
			method: 'DELETE',
		})
	}

	static async getAverageRating(
		productId: string | number
	): Promise<AxiosResponse<number>> {
		return await api<number>({
			url: `${REVIEW_URL}/rating/average/${productId}`,
			method: 'GET',
		})
	}
}
