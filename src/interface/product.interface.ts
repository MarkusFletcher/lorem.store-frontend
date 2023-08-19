import { ICategory } from './category.interface'
import { IReview } from './review.interface'

export enum EnumProductSort {
	HIGHT_PRICE = 'hight-price',
	LOW_PRICE = 'low-price',
	NEWEST = 'newest',
	OLDEST = 'oldest',
}

export interface IProduct {
	id: number
	name: string
	code: string
	description: string
	price: number
	images: string[]
	category: ICategory
	reviews: IReview[]
}

export interface IProductFavorite {
	id: number
	name: string
	code: string
	price: number
	images: string[]
}

export interface IProductCreateData {
	name: string
	description: string
	price: number
	images: string[]
	categoryId: number
}

export interface IProductResponseData {
	products: IProduct[]
	length: number
}

export interface IProductUpdateData extends Partial<IProductCreateData> {}

export interface IProductFilters {
	sort?: EnumProductSort
	searchTerm?: string
	page?: string | number
	perPage?: string | number
}

export type TypeProducts = {
	products: IProduct[]
}
