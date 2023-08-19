import { useAppSelector } from '@redux/hooks'

export const useCart = () => useAppSelector(state => state.cart)
