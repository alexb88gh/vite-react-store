import { http } from '@/shared/api'
// import type { Category } from '@/shared/types/category'

export const categoriesApi = {
  getList: () => http.get<string[]>('/products/category-list', {}),
}
