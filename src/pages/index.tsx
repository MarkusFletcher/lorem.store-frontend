import { Home } from '@components/screens/Home'
import { TypeProducts } from '@interface/product.interface'
import { ProductService } from '@services/product/product.service'
import { GetStaticProps, NextPage } from 'next'

const Index: NextPage<TypeProducts> = ({ products }) => {
	return <Home products={products} />
}

export const getStaticProps: GetStaticProps<TypeProducts> = async () => {
	const { data } = await ProductService.getAll({
		page: 1,
		perPage: 10,
	})

	return {
		props: {
			products: data.products,
		},
	}
}

export default Index
