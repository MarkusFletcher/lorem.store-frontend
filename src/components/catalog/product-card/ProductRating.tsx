import { ReviewService } from '@services/review.service'
import { useQuery } from '@tanstack/react-query'
import { Rating } from 'react-simple-star-rating'

interface IProductRatig {
	productId: string | number
	rewiewsCount?: number
}

export const ProductRating: React.FC<IProductRatig> = ({
	productId,
	rewiewsCount,
}) => {
	const { data: rating } = useQuery(
		['product/rating/get'],
		() => ReviewService.getAverageRating(productId),
		{
			select: ({ data }) => data,
		}
	)

	return (
		<div>
			<Rating
				readonly
				SVGstyle={{ display: 'inline-block' }}
				initialValue={rating}
				size={34}
				allowFraction
				transition
			></Rating>
			{rewiewsCount && <span>({rewiewsCount}) rewiews</span>}
		</div>
	)
}
