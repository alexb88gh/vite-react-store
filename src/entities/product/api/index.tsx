import { http } from '@/shared/api'
import type { ProductListResponse } from '@/shared/types/product'

export const productsApi = {
  getList: () => http.get<ProductListResponse>('/products', {}),
}