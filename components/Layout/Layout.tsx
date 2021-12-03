import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'

interface props {
  pageTitle?: string
  loggedIn?: boolean
  isAdmin?: boolean
  children: ReactNode
}

const Layout = ({
  pageTitle = '',
  loggedIn = false,
  isAdmin = false,
  children,
}: props) => {
  const router = useRouter()

  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Header pageTitle={pageTitle} isAdmin={isAdmin} loggedIn={loggedIn} />
      {router.pathname !== '/login' && router.pathname !== '/register' ? (
        <>
          <div>{children}</div>
          <Footer />
        </>
      ) : (
        <div className='d-flex flex-column align-items-center mt-5'>
          {children}
        </div>
      )}
    </div>
  )
}

export default Layout
