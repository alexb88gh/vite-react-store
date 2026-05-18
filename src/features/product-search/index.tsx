import { useGetCategoriesList } from '@/entities/category/hooks/use-get-list'
import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'
import { Controller, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

interface SearchFormData {
  search: string
  category: string
}

export const ProductSearch = () => {
  const navigate = useNavigate()
  const { data: categories } = useGetCategoriesList()

  const { register, control, handleSubmit } = useForm<SearchFormData>({
    defaultValues: {
      search: '',
      category: 'all',
    },
  })

  const onSubmit = ({ search, category }: SearchFormData) => {
    const params = new URLSearchParams()

    if (search.trim()) {
      params.set('search', search)
    }

    if (category !== 'all') {
      params.set('category', category)
    }

    const query = params.toString()

    navigate(query ? `/products?${query}` : '/products')
  }

  return (
    <div className="w-full">
      <form role="search" className="flex w-full" onSubmit={handleSubmit(onSubmit)}>
        <Input
          id="search"
          aria-label="Search products"
          className={cn(
            'px-4 h-10 rounded-[22px] rounded-br-none rounded-tr-none rounded-br-0',
            'bg-zinc-100 border-0 focus-visible:shadow-none focus-visible:ring-0',
            'border-r border-r-white',
          )}
          {...register('search')}
        />
        <Controller
          control={control}
          name="category"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                className={cn(
                  'h-10 max-w-37.5 bg-zinc-100',
                  'rounded-none shadow-none border-0 focus-visible:shadow-none',
                  'focus-visible:ring-0 border-r border-r-white',
                  'text-neutral-500 capitalize',
                )}
              >
                <SelectValue placeholder="All Categories"></SelectValue>
              </SelectTrigger>
              <SelectContent className="bg-white rounded-none border-neutral-500">
                <SelectItem aria-selected value="all" className="capitalize text-neutral-500">
                  All categories
                </SelectItem>
                {categories &&
                  categories.data.map((category) => (
                    <SelectItem
                      key={category}
                      value={category}
                      className="capitalize text-neutral-500"
                    >
                      {category}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>
          )}
        />

        <Button
          aria-label="Search"
          className={cn(
            'h-10 bg-zinc-100 text-neutral-500 border-0',
            'rounded-[22px] rounded-tl-none rounded-bl-none cursor-pointer',
          )}
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </Button>
      </form>
    </div>
  )
}
