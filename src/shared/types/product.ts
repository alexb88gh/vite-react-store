import type { ServerListResponse } from '@/shared/types/server-list-response'

export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProductListResponse extends ServerListResponse {
  products: Product[]
}
