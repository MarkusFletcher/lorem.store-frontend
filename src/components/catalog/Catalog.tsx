import { ProductCard } from './product-card/ProductCard'
import { IProduct } from '@interface/product.interface'
import { Loader } from '@ui/Loader'

interface ICatalog {
	products: IProduct[]
	isLoading?: boolean
}

export const Catalog: React.FC<ICatalog> = ({ products, isLoading }) => {
	if (isLoading) return <Loader />

	return (
		<section className='grid grid-cols-4 gap-5 p-5'>
			{products.length ? (
				products.map(product => (
					<ProductCard product={product} key={product.id}></ProductCard>
				))
			) : (
				<div>There are not products</div>
			)}
		</section>
	)
}
