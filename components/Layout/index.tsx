import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import { CContainer } from '@coreui/react'

interface props {
  isCustomer?: boolean
  isAdmin?: boolean
  footerOff?: boolean
  children: ReactNode
}

const Layout = ({
  isCustomer,
  isAdmin,
  footerOff = false,
  children,
}: props) => {
  const router = useRouter()

  return (
    <CContainer fluid className='min-vh-100 d-flex flex-column p-0'>
      <Header isAdmin={isAdmin} isCustomer={isCustomer} />
      {router.pathname !== '/login' && router.pathname !== '/signup' ? (
        <>
          <div>{children}</div>
          {!footerOff && <Footer />}
        </>
      ) : (
        <div className='d-flex flex-column align-items-center mt-5'>
          {children}
        </div>
      )}
    </CContainer>
  )
}

export default Layout
