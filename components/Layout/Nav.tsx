import Link from 'next/link'
import { useRouter } from 'next/router'
import { adminMenu, customerMenu } from '../../utils/data'
import { CHeaderNav, CNavItem, CNavLink } from '@coreui/react'

interface props {
  isAdmin?: boolean
}

const Nav = ({ isAdmin }: props) => {
  const router = useRouter()
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
          <CNavItem key={index}>
            <Link href={link.path} passHref>
              <CNavLink className='px-5' active={isActive(link.path)}>
                {link.name}
              </CNavLink>
            </Link>
          </CNavItem>
        )
      })}
    </CHeaderNav>
  )
}

export default Nav
