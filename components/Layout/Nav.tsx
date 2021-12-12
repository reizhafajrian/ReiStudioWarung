import { useRouter } from 'next/router'
import { CHeaderNav, CNavItem, CNavLink } from '@coreui/react'

interface props {
  forAdmin?: boolean
}

const Nav = ({ forAdmin }: props) => {
  const router = useRouter()

  const customerMenu = [
    { name: 'Home', path: '/customer' },
    { name: 'Belanja', path: '/customer/products' },
    { name: 'Contact Us', path: '/customer/contact' },
  ]

  const adminMenu = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Product', path: '/admin/products' },
    { name: 'History', path: '/admin/history' },
  ]

  const navMenu = forAdmin ? adminMenu : customerMenu

  function isActive(route: string) {
    if (route === router.pathname) {
      return true
    }
  }

  return (
    <CHeaderNav className='mx-auto'>
      {navMenu.map((link, index) => (
        <CNavItem className='px-3' key={index}>
          <CNavLink active={isActive(link.path)} href={link.path}>
            {link.name}
          </CNavLink>
        </CNavItem>
      ))}
    </CHeaderNav>
  )
}

export default Nav
