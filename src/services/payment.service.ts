import { AxiosResponse } from 'axios'
import { api } from '@/api/api.interceptor'

const PAYMENT_URL = 'payment'

export class PaymentService {
  static async create(amount: number): Promise<AxiosResponse<unknown>> {
    return await api({
      url: PAYMENT_URL,
      method: 'POST',
      data: {
        amount,
      },
    })
  }
}
