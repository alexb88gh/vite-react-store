import type { Product } from '@/shared/types/product'
import { Link } from 'react-router-dom'
import { Rating } from 'react-simple-star-rating'

import ExternalIcon from '@/assets/svg/external-icon.svg?react'
import HeartIcon from '@/assets/svg/heart-icon.svg?react'
import { cn } from '@/shared/lib/utils'

interface Props {
  product: Product
}

export const ProductCardInfo = ({ product }: Props) => {
  return (
    <div className="px-2 py-2.5 flex flex-col justify-center items-center">
      <Link to={`/products/${product.id}`} className="text-xs uppercase hover:text-primary">
        {product.category}
      </Link>
      <Link
        to={`/products/${product.id}`}
        className="truncate max-w-full text-base hover:text-primary"
      >
        {product.title}
      </Link>
      <div className="flex gap-2 justify-center items-center">
        <span className="text-gray-500 font-semibold line-through">${product.price}</span>
        <span className="text-lg font-semibold">
          ${(product.price - product.price * (product.discountPercentage / 100)).toFixed(2)}
        </span>
      </div>
      <div>
        <Rating
          readonly={true}
          allowFraction={true}
          initialValue={product.rating}
          size={16}
          SVGclassName="inline-block"
        />
      </div>
      <div className="mt-4 relative">
        <button
          type="button"
          className={cn(
            'absolute top-0 -left-8.5 block w-8 cursor-pointer bg-gray-200 p-2 opacity-100',
            'text-gray-600 hover:text-gray-900',
            'transition-all duration-300',
            'lg:left-0 lg:opacity-0',
            'lg:group-hover/card:-left-8.5 lg:group-hover/card:opacity-100',
            'lg:group-focus-within/card:-left-8.5 lg:group-focus-within/card:opacity-100',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          )}
        >
          <HeartIcon className="" />
        </button>
        <button
          type="button"
          className={cn(
            'block p-2 uppercase text-xs font-semibold',
            'cursor-pointer bg-gray-200 transition-all duration-300',
            'lg:group-hover/card:bg-gray-800 lg:group-hover/card:text-gray-100',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          )}
        >
          Add to cart
        </button>
        <button
          type="button"
          className={cn(
            'absolute top-0 -right-8.5 block w-8 cursor-pointer bg-gray-200 p-2 opacity-100',
            'text-gray-600 hover:text-gray-900',
            'transition-all duration-300',
            'lg:right-0 lg:opacity-0',
            'lg:group-hover/card:-right-8.5 lg:group-hover/card:opacity-100',
            'lg:group-focus-within/card:-right-8.5 lg:group-focus-within/card:opacity-100',
            'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          )}
        >
          <ExternalIcon className="" />
        </button>
      </div>
    </div>
  )
}
