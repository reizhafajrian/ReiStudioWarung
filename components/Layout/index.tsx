import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'
import { CContainer } from '@coreui/react'

interface props {
  children: ReactNode
}

const Layout = ({ children }: props) => {
  const router = useRouter()

  return (
    <CContainer fluid className='d-flex flex-column p-0'>
      <Header />
      {router.pathname !== '/login' && router.pathname !== '/signup' ? (
        <>
          <div>{children}</div>
          <Footer />
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
