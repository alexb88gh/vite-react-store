import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Input } from '@/shared/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/ui/select'

export const ProductSearch = () => {
  return (
    <div className="flex">
      <Input
        id="search"
        name="search"
        className={cn(
          'h-10 rounded-[15px] rounded-br-none rounded-tr-none rounded-br-0 bg-zinc-100 border-0 focus:border-0 focus-visible:shadow-none focus-visible:ring-0 border-r border-r-white',
        )}
      />
      <Select>
        <SelectTrigger className="h-10 bg-zinc-100 rounded-none shadow-none border-0 focus-visible:shadow-none focus-visible:ring-0 border-r border-r-white">
          <SelectValue placeholder="Sort by" />
        </SelectTrigger>
        <SelectContent className="bg-white">
          <SelectItem value="title-asc">Title A-Z</SelectItem>
          <SelectItem value="title-desc">Title Z-A</SelectItem>
          <SelectItem value="price-asc">Price low to high</SelectItem>
          <SelectItem value="price-desc">Price high to low</SelectItem>
        </SelectContent>
      </Select>
      <Button className="h-10 bg-zinc-100 border-0 rounded-none rounded-tr-[15px] rounded-br-[15px] cursor-pointer">
        <i className="fa-solid fa-magnifying-glass"></i>
      </Button>
    </div>
  )
}
