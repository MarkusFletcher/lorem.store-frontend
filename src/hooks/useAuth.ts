import { useAppSelector } from '@/redux/hooks'

export const useAuth = () => useAppSelector(state => state.user)
