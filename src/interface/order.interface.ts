import { ICartItem } from './cart.interface'
import { IUser } from './user.interface'

enum EnumOrderStatus {
  NEW = 'NEW',
  PAID = 'PAID',
  PROCESSING = 'PROCESSING',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED',
  CANCELLED = 'CANCELLED',
}

export interface IOrder {
  id: number
  createdAt: string
  status: EnumOrderStatus
  items: IOrderItem[]
  user: IUser
}

export interface IOrderItem extends ICartItem {}
