import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { adminMenu, customerMenu } from '../../utils/data'
import Button from '../Button'
import {
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CNavItem,
  CNavLink,
} from '@coreui/react'

const Header = () => {
  const router = useRouter()
  const currentPath = router.pathname
  const navMenu = currentPath == '/admin' ? adminMenu : customerMenu

  function isActive(route: string) {
    if (route === currentPath) {
      return true
    }
  }

  return (
    <CHeader
      className='p-0 border-0 align-items-center justify-content-between py-3'
      style={{
        boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
        borderRadius: '0 0 20px 20px',
      }}
      position='sticky'
    >
      <CContainer className='p-0'>
        <Link href='/' passHref>
          <CHeaderBrand className='d-flex align-items-center p-0 m-0'>
            <Image src='/logo.jpg' alt='logo' width='40' height='40' />
            <h5 className='text-primary fw-bold m-0 ms-4'>Nama Warung</h5>
          </CHeaderBrand>
        </Link>
        {currentPath !== '/login' && currentPath !== '/signup' ? (
          <>
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
            <div>
              <Button
                title='Masuk'
                style='text-light bg-white fw-bold me-1 px-4 py-3'
                borderRadius='12px'
                path='/login'
              />
              <Button
                title='Daftar'
                style='text-white bg-dark fw-bold px-4 py-3'
                borderRadius='12px'
                path='/signup'
              />
            </div>
          </>
        ) : null}
      </CContainer>
    </CHeader>
  )
}

export default Header
