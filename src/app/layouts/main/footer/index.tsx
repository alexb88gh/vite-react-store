import { cn } from '@/shared/lib/utils'
import { Button } from '@/shared/ui/button'
import { Container } from '@/shared/ui/container'
import { Input } from '@/shared/ui/input'
import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import * as yup from 'yup'
import { newsletterSchema } from './validation'

const contactInfo: { name: string; value: string; type: 'string' | 'phone' | 'mail' }[] = [
  { name: 'Address', value: '123 Street Name, City, England', type: 'string' },
  { name: 'Phone', value: '(123) 456-7890', type: 'phone' },
  { name: 'Email', value: 'mail@example.com', type: 'mail' },
  { name: 'Working Days/Hours', value: 'Mon - Sun / 9:00 AM - 8:00 PM', type: 'string' },
]

const servicesMenu: { name: string; link: string }[] = [
  { name: 'Help & FAQs', link: '#' },
  { name: 'Order Tracking', link: '#' },
  { name: 'Shipping & Delivery', link: '#' },
  { name: 'Orders History', link: '#' },
  { name: 'Advanced Search', link: '#' },
  { name: 'My Account', link: '#' },
  { name: 'Careers', link: '#' },
  { name: 'About Us', link: '#' },
  { name: 'Corporate Sales', link: '#' },
  { name: 'Privacy', link: '#' },
]

const popularTags: string[] = [
  'Bag',
  'Black',
  'Blue',
  'Clothes',
  'Fashion',
  'Hub',
  'Shirt',
  'Shoes',
  'Skirt',
  'Sports',
  'Sweater',
]

type NewsletterFormData = yup.InferType<typeof newsletterSchema>

export const Footer = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterFormData>({
    resolver: yupResolver(newsletterSchema),
    defaultValues: {
      email: '',
    },
  })

  const onSubmit = async ({ email }: NewsletterFormData) => {
    console.log('newsletter subscribe', email)
    reset()
  }

  return (
    <footer className="mt-auto border-t bg-neutral-800">
      <Container>
        <div className="grid grid-cols-1 gap-8 pt-16.25 pb-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4.25 uppercase font-poppins font-semibold text-white text-base">
              Contact Info
            </h3>
            {contactInfo.map((item) => (
              <div key={item.name} className="mb-2.5 text-[13px]">
                <div className="uppercase text-white">{item.name}:</div>
                {item.type === 'string' ? (
                  <div className="text-neutral-400">{item.value}</div>
                ) : (
                  <Link
                    to={item.type === 'phone' ? 'tel:' : 'mailto:'}
                    className="text-neutral-400 hover:text-sky-600"
                  >
                    {item.value}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div>
            <h3 className="mb-4.25 uppercase font-poppins font-semibold text-white text-base">
              Customer Service
            </h3>
            <ul>
              {servicesMenu.map((item) => (
                <li className="mb-1.25">
                  <Link
                    key={item.name}
                    to={item.link}
                    className="text-[13px] text-neutral-400 hover:text-sky-600 block"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-4.25 uppercase font-poppins font-semibold text-white text-base">
              Popular Tags
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {popularTags.map((tag) => (
                <Link
                  key={tag}
                  to="#"
                  className={cn(
                    'py-1 px-2',
                    'text-[11px] text-neutral-400 border border-neutral-700',
                    'hover:border-white hover:text-white',
                    'transition-all duration-300',
                  )}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h3 className="mb-4.25 uppercase font-poppins font-semibold text-white text-base">
              Subscribe newsletter
            </h3>
            <p className="text-[13px] text-neutral-400 mb-3.25">
              Get all the latest information on events, sales and offers. Sign up for newsletter:
            </p>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-3">
              <Input
                type="email"
                placeholder="Email address"
                className={cn(
                  'bg-zinc-700',
                  'h-10 rounded-3xl px-5 text-[13px] text-neutral-100 placeholder:text-neutral-500',
                  'border-none focus-visible:ring-0',
                )}
                aria-invalid={Boolean(errors.email)}
                {...register('email')}
              />
              {errors.email && <p className="text-xs text-red-400">{errors.email.message}</p>}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="h-10 px-5 rounded-3xl bg-sky-600 text-white hover:bg-sky-500 cursor-pointer"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-neutral-700 py-7">
          <p className="text-xs text-neutral-500">
            Copyright {new Date().getFullYear()} Dummy Demo Store. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  )
}
