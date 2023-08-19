import { useAuth } from './useAuth'
import { errorCatch } from '@api/api.helper'
import { IUserProfile } from '@interface/user.interface'
import { UserService } from '@services/user.service'
import { useQuery } from '@tanstack/react-query'

export const useProfile = () => {
	const { user } = useAuth()
	const { data } = useQuery(['profile/get'], UserService.getProfile, {
		select: ({ data }) => data,
		onError: error => console.log(errorCatch(error)),
		enabled: !!user,
	})
	return { profile: data || ({} as IUserProfile) }
}
