import { Meta } from '@components/Meta'
import { Catalog } from '@components/catalog/Catalog'
import { TypeProducts } from '@interface/product.interface'

export const Home: React.FC<TypeProducts> = ({ products }) => {
	return (
		<Meta title='Home'>
			Home
			<Catalog products={products}></Catalog>
		</Meta>
	)
}
