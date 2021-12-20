import { useRouter } from 'next/router'
import { RootStateOrAny, useSelector } from 'react-redux'
import { CHeaderNav, CNavItem, CNavLink } from '@coreui/react'

const Nav = () => {
  const router = useRouter()

  const { forAdmin } = useSelector((state: RootStateOrAny) => state.user)

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
          <CNavLink
            active={isActive(link.path)}
            onClick={() => router.push(link.path)}
          >
            {link.name}
          </CNavLink>
        </CNavItem>
      ))}
    </CHeaderNav>
  )
}

export default Nav
