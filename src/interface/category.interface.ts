export interface ICategory {
  id: number
  code: string
  name: string
}

export interface ICategoryCreateData {
  name: string
}

export interface ICategoryUpdateData extends Partial<ICategoryCreateData> {}
