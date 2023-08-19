import { useCart } from '@hooks/useCart'
import { IProduct } from '@interface/product.interface'
import { useActions } from '@redux/hooks'
import { IoCartOutline, IoCart } from 'react-icons/io5'

interface IAddToCart {
	product: IProduct
}

export const AddToCartButton: React.FC<IAddToCart> = ({ product }) => {
	const { addToCart, removeFromCart } = useActions()
	const { items } = useCart()

	const cartItem = items?.find(item => item.product.id === product.id)

	const clickHandler = () => {
		if (!cartItem) addToCart({ product, quantity: 1, price: product.price })
		else removeFromCart(cartItem.id)
	}

	return (
		<button onClick={clickHandler} type='button'>
			{cartItem ? <IoCart /> : <IoCartOutline />}
		</button>
	)
}
