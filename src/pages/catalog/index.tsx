import { useGetProductList } from '@/entities/product/hooks/use-get-list'
import { HomeSlider } from '@/features/home-slider'
import { ProductCard } from '@/features/product-card'
import { Container } from '@/shared/ui/container'
import { Input } from '@/shared/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'
import { useMemo, useState } from 'react'

export const CatalogPage = () => {
  const [search, setSearch] = useState('')
  const [sortBy, setSortBy] = useState<'title-asc' | 'title-desc' | 'price-asc' | 'price-desc'>(
    'title-asc',
  )
  const { data, isLoading, error } = useGetProductList()

  const products = useMemo(() => {
    const list = [...(data?.data.products ?? [])]

    const filtered = search.trim()
      ? list.filter((product) => product.title.toLowerCase().includes(search.trim().toLowerCase()))
      : list

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title-desc':
          return b.title.localeCompare(a.title)
        case 'price-asc':
          return a.price - b.price
        case 'price-desc':
          return b.price - a.price
        default:
          return a.title.localeCompare(b.title)
      }
    })
  }, [data?.data.products, search, sortBy])

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>Error</div>

  return (
    <div>
      <HomeSlider />
      <Container>
        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-3 md:grid-cols-[1fr_220px]">
            <Input
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search product by title..."
            />
            <Select value={sortBy} onValueChange={(value) => setSortBy(value as typeof sortBy)}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="title-asc">Title A-Z</SelectItem>
                <SelectItem value="title-desc">Title Z-A</SelectItem>
                <SelectItem value="price-asc">Price low to high</SelectItem>
                <SelectItem value="price-desc">Price high to low</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          {!products.length && <div className="text-sm text-gray-500">No products found.</div>}
        </div>
      </Container>
    </div>
  )
}
