import { useProfile } from '@hooks/useProfile'
import { IProduct } from '@interface/product.interface'
import { UserService } from '@services/user.service'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

interface IFavoriteButton {
	productId: number | string
}

export const FavoriteButton: React.FC<IFavoriteButton> = ({ productId }) => {
	const {
		profile: { favorites },
	} = useProfile()

	const queryClient = useQueryClient()

	const isInFavorites = favorites?.some(item => item.id === productId)
	const mutation = useMutation(
		['favorite/toggle'],
		() => UserService.toggleFavorites(productId),
		{
			onSuccess: () => {
				queryClient.invalidateQueries(['profile/get'])
			},
		}
	)

	const clickHandler = () => {
		mutation.mutate()
	}

	return (
		<button onClick={clickHandler} type='button'>
			{isInFavorites ? <AiFillHeart /> : <AiOutlineHeart />}
		</button>
	)
}
