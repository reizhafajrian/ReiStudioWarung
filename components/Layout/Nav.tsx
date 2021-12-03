import Link from 'next/link'
import { useRouter } from 'next/router'
import { CHeaderNav, CNavItem, CNavLink } from '@coreui/react'

interface props {
  isAdmin?: boolean
}

const Nav = ({ isAdmin }: props) => {
  const router = useRouter()

  const customerMenu = [
    { name: 'Home', path: '/' },
    { name: 'Belanja', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ]

  const adminMenu = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Product', path: '/admin/product' },
    { name: 'History', path: '/admin/history' },
  ]

  const navMenu = isAdmin ? adminMenu : customerMenu

  function isActive(route: string) {
    if (route === router.pathname) {
      return true
    }
  }

  return (
    <CHeaderNav>
      {navMenu.map((link, index) => {
        return (
          <CNavItem className='px-3' key={index}>
            <Link href={link.path} passHref>
              <CNavLink active={isActive(link.path)}>{link.name}</CNavLink>
            </Link>
          </CNavItem>
        )
      })}
    </CHeaderNav>
  )
}

export default Nav
