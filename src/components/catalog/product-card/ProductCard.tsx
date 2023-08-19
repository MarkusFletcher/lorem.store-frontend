import { AddToCartButton } from './AddToCartButton'
import { FavoriteButton } from './FavoriteButton'
import { ProductRating } from './ProductRating'
import { IProduct } from '@interface/product.interface'
import Image from 'next/image'

interface IProductCard {
	product: IProduct
}

export const ProductCard: React.FC<IProductCard> = ({ product }) => {
	return (
		<article>
			<div>
				<FavoriteButton productId={product.id}></FavoriteButton>
				<AddToCartButton product={product}></AddToCartButton>
				<Image
					width={300}
					height={300}
					src={product.images[0]}
					alt={product.name}
				/>
			</div>
			<h3>{product.name}</h3>
			<div>{product.category.name}</div>
			<ProductRating
				productId={product.id}
				rewiewsCount={product.reviews.length}
			></ProductRating>
		</article>
	)
}
