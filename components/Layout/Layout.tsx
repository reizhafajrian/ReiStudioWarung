import { ReactNode } from 'react'
import { useRouter } from 'next/router'
import Header from './Header'
import Footer from './Footer'

interface props {
  pageTitle: string
  children: ReactNode
  forAdmin?: boolean
}

const Layout = ({ pageTitle, children, forAdmin }: props) => {
  const router = useRouter()

  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Header pageTitle={pageTitle} forAdmin={forAdmin} />
      {router.pathname !== '/admin/login' &&
      router.pathname !== '/customer/login' &&
      router.pathname !== '/customer/register' &&
      router.pathname !== '/admin/register' ? (
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
