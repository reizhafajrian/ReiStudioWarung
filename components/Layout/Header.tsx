import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Button from '../Button'
import { CContainer, CHeader, CHeaderBrand } from '@coreui/react'
import Nav from './Nav'

interface props {
  isAdmin?: boolean
  isCustomer?: boolean
}
const Header = ({ isAdmin, isCustomer }: props) => {
  const router = useRouter()
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
        <Link href={isAdmin ? '/admin' : '/'} passHref>
          <CHeaderBrand className='d-flex align-items-center p-0 m-0'>
            <Image src='/logo.jpg' alt='logo' width='40' height='40' />
            <h5 className='text-light fw-bold m-0 ms-4'>
              Nama Warung{' '}
              {isAdmin && <span className='text-primary'>for Admin</span>}
            </h5>
          </CHeaderBrand>
        </Link>
        {router.pathname !== '/login' && router.pathname !== '/signup' ? (
          <>
            {isAdmin ? (
              // For Admin
              <>
                <Nav isAdmin={true} />
                <p className='text-light fw-bold mb-0'>Admin Warung</p>
              </>
            ) : isCustomer ? (
              // For Customer
              <>
                <Nav />
                <p>customer</p>
                {/* 
                ---------------
                User Profile dan Cart
                ---------------
              */}
              </>
            ) : (
              // For not Signin user
              <>
                <Nav />
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
            )}
          </>
        ) : null}
      </CContainer>
    </CHeader>
  )
}

export default Header
