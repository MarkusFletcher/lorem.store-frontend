import { IProduct } from './product.interface'

export interface ICartItem {
	id: number
	quantity: number
	price: number
	product: IProduct
}

export interface ICartInitialState {
	items: ICartItem[]
}

export interface ICartAddToCartPayload extends Omit<ICartItem, 'id'> {}

export interface ICartChangeQuantityPayload extends Pick<ICartItem, 'id'> {
	type: 'plus' | 'minus'
	value?: number
}
