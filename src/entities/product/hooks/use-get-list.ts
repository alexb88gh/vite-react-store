import { useQuery } from '@tanstack/react-query'
import { productsApi } from '../api'
import { productsKeys } from '../queryKeys'

export const useGetProductList = () =>
  useQuery({
    queryKey: productsKeys.list(),
    queryFn: productsApi.getList,
  })
