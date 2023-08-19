import {
	ICartInitialState,
	ICartAddToCartPayload,
	ICartChangeQuantityPayload,
} from '@interface/cart.interface'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: ICartInitialState = {
	items: [],
}

export const cartSlice = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, action: PayloadAction<ICartAddToCartPayload>) => {
			if (!state.items) state.items = []

			const isItemExist = state.items.some(
				item => item.product.id === action.payload.product.id
			)
			if (!isItemExist)
				state.items.push({ ...action.payload, id: state.items.length })
		},
		removeFromCart: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter(item => item.id !== action.payload)
		},
		changeCartItemQuantity: (
			state,
			action: PayloadAction<ICartChangeQuantityPayload>
		) => {
			const { id, type, value } = action.payload
			const item = state.items.find(item => item.id === id)
			if (item) {
				if (type === 'plus') {
					item.quantity += value ?? 1
					item.price = item.product.price * item.quantity
				} else if (type === 'minus') {
					item.quantity -= value ?? 1
					item.price = item.product.price * item.quantity
				}
			}
		},
		resetCart: state => {
			state.items = []
		},
	},
})
