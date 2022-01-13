import { useRouter } from 'next/router'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { CHeaderNav, CNavItem, CNavLink } from '@coreui/react'
import { useEffect } from 'react'
import { getUser } from 'redux/actions/loggedActions'

const Nav = ({ navbarOpen }: any) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const { forAdmin, role } = useSelector((state: RootStateOrAny) => state.user)

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

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
    <CHeaderNav
      className={`${navbarOpen ? 'd-flex' : 'd-none'} d-lg-flex mx-auto`}
    >
      {role !== 2 &&
        navMenu.map((link, index) => (
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
