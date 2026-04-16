import defaultProductImg from '@/assets/default-product-pic.jpg'
import { cn } from '@/shared/lib/utils'
import type { Product } from '@/shared/types/product'
import { ProductCardInfo } from './info'

interface Props {
  product: Product
}

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="group/card flex-1 min-w-75 hover:shadow-[0px_12px_20px_0px_rgba(0,0,0,0.08)] transition-all duration-300">
      <div className="aspect-square group relative w-full bg-gray-100 cursor-pointer">
        <img
          src={product.images.length ? product.images[0] : defaultProductImg}
          alt={product.title}
          className={cn(
            'absolute w-full h-full object-cover inset-0',
            product.images.length > 1 && 'lg:group-hover/card:opacity-0',
            product.images.length > 1 && 'transition-opacity duration-300',
          )}
        />
        {product.images.length > 1 && (
          <img
            src={product.images[product.images.length - 1]}
            alt=""
            className="absolute inset-0 h-full w-full object-cover opacity-0 lg:group-hover/card:opacity-100 transition-opacity duration-300"
          />
        )}
      </div>
      <ProductCardInfo product={product} />
    </div>
  )
}
