import { ReactNode } from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

interface props {
  pageTitle: string
  children: ReactNode
}

const Layout = ({ pageTitle, children }: props) => {
  return (
    <>
      <Head>
        <title>Warung | {pageTitle}</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <div className='min-vh-100 d-flex flex-column'>
        <Header />
        <div>{children}</div>
        <Footer />
      </div>
    </>
  )
}

export default Layout
