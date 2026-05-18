import { useQuery } from '@tanstack/react-query'
import { categoriesApi } from '../api'
import { categoriesKeys } from '../queryKeys'

export const useGetCategoriesList = () =>
  useQuery({
    queryKey: categoriesKeys.list(),
    queryFn: categoriesApi.getList,
  })
