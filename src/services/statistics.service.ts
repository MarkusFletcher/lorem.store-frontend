import { api } from '@/api/api.interceptor'
import { IStatisticsItem } from '@interface/statistics.interface'
import { AxiosResponse } from 'axios'

const STATISTICS_URL = 'statistics'

export class StatisticsService {
	static async getMain(): Promise<AxiosResponse<IStatisticsItem[]>> {
		return await api({
			url: STATISTICS_URL,
			method: 'GET',
		})
	}
}
