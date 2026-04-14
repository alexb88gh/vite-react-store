import logo from '@/assets/logo.png'
import phoneIcon from '@/assets/phone.png'
import BagIcon from '@/assets/svg/bag-icon.svg?react'
import HeartIcon from '@/assets/svg/heart-icon.svg?react'
import UserIcon from '@/assets/svg/user-icon.svg?react'
import { ProductSearch } from '@/features/product-search'
import { Container } from '@/shared/ui/container'
import clsx from 'clsx'
import { Link } from 'react-router-dom'
import { mainMenu, topMenu } from './menus'

export const Header = () => {
  return (
    <header className="border-b">
      <Container>
        <div className="flex justify-between items-center py-2">
          <div>
            <span className="font-poppins uppercase text-[11px] text-neutral-500 font-semibold">
              FREE Returns. Standard Shipping Orders $99+
            </span>
          </div>
          <div className="flex justify-end items-center gap-4">
            <div className="flex gap-6">
              {topMenu.map((item) => (
                <Link
                  to={item.link}
                  key={item.title}
                  className={clsx('text-[11px] font-semibold text-neutral-500')}
                >
                  {item.title}
                </Link>
              ))}
            </div>
            <div className="h-5 border-l border-black/4"></div>
            <div className="flex justify-end items-center gap-4">
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-facebook"></i>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-telegram"></i>
              </Link>
              <Link to="#" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-instagram"></i>
              </Link>
            </div>
          </div>
        </div>
      </Container>
      <hr className="text-neutral-200"></hr>
      <Container>
        <div className="flex justify-between items-center gap-10 py-2 border-b border-b-neutral-100">
          <div className="max-w-40">
            <Link to="/">
              <img src={logo} alt="logo" className="w-full" />
            </Link>
          </div>
          <div className="w-full flex justify-end gap-7.5">
            <ProductSearch />
            <div className="min-w-40 flex gap-1.75 items-center">
              <img alt="phone" src={phoneIcon} width="30" height="30"></img>
              <div className="flex flex-col">
                <span className="font-poppins text-neutral-500 uppercase text-[11px] font-semibold">
                  Call us now
                </span>
                <span className="text-neutral-800 text-[18px] font-bold">+123 5678 890</span>
              </div>
            </div>
            <div className="flex justify-end items-center gap-5">
              <Link to="/login" title="LogIn" className="cursor-pointer">
                <UserIcon className="h-7.5 w-7.5" />
              </Link>
              <Link to="/wishlist" title="Wish List" className="cursor-pointer">
                <HeartIcon className="h-7.5 w-7.5" />
              </Link>
              <button
                onClick={() => console.log('open cart sidebar')}
                title="Shop Cart"
                className="cursor-pointer"
              >
                <BagIcon className="h-7.5 w-7.5" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <nav aria-label="Top navigation">
            <ul className="flex justify-start gap-5">
              {mainMenu.map((item) => (
                <li key={item.title}>
                  <Link
                    to={item.link}
                    className="block uppercase py-4 border-t-3 border-transparent text-[12px] font-bold text-neutral-600 hover:border-sky-600 hover:text-sky-600 transition duration-300 focus-visible:text-sky-600"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  )
}
