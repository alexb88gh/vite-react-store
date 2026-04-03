import { useGetProductList } from '@/entities/product/hooks/use-get-list'

export const CatalogPage = () => {
  const { data, isLoading, error } = useGetProductList()

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.data.products.map((p) => (
        <div key={p.id} className="border p-2">
          {p.title}
        </div>
      ))}
    </div>
  )
}
