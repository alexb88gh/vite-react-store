import { Container } from '@/shared/ui/container'
import clsx from 'clsx'

import logo from '@/assets/logo.png'

import { topMenu } from './top-menu'

import { ProductSearch } from '@/features/product-search'

export const Header = () => {
  return (
    <header className="border-b">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div>
            <span className="uppercase text-[11px] text-neutral-500 font-bold">
              FREE Returns. Standard Shipping Orders $99+
            </span>
          </div>
          <div className="flex justify-end items-center gap-4">
            <div className="flex gap-6">
              {topMenu.map((item) => (
                <a
                  href="#"
                  key={item.title}
                  className={clsx('text-[11px] font-semibold text-neutral-500')}
                >
                  {item.title}
                </a>
              ))}
            </div>
            <div className="h-5 border-l border-black/4"></div>
            <div className="flex justify-end items-center gap-4">
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-telegram"></i>
              </a>
              <a href="#">
                <i className="fa-brands fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
      </Container>
      <hr className="text-neutral-100"></hr>
      <Container>
        <div className="flex justify-between items-center gap-10 py-2 border-b border-b-neutral-100">
          <div className="max-w-40">
            <a href="/">
              <img src={logo} alt="logo" className="w-full" />
            </a>
          </div>
          <div className="w-full flex justify-between">
            <div>
              <ProductSearch />
            </div>
            <div>Call</div>
            <div>Middle menu</div>
          </div>
        </div>
        <div></div>
      </Container>
    </header>
  )
}
