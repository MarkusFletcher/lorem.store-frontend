import { IUser } from './user.interface'

export interface IReview {
  id: number
  createdAt: string
  rating: string
  text: string
  user: IUser
}

export interface IReviewCreateData {
  rating: string
  text: string
}
