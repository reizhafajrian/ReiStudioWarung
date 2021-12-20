import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { CContainer, CHeader, CHeaderBrand } from '@coreui/react'

interface props {
  forAdmin: boolean
  pageTitle: string
}

const Header = ({ forAdmin, pageTitle }: props) => {
  return (
    <>
      <Head>
        <title>Warung | {pageTitle}</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <CHeader className='border-0 align-items-center' position='sticky'>
        <CContainer className='py-2 position-relative'>
          <Link href={forAdmin ? '/admin/login' : '/customer'} passHref>
            <CHeaderBrand className='position-md-absolute d-flex align-items-center p-0 m-0'>
              <Image
                src='/images/logo.jpg'
                alt='logo'
                width='40'
                height='40'
                objectFit='contain'
              />
              <h5 className='text-light fw-bold m-0 ms-3'>
                Nama Warung
                {forAdmin && (
                  <span className='text-primary'>&nbsp;for Admin</span>
                )}
              </h5>
            </CHeaderBrand>
          </Link>
        </CContainer>
      </CHeader>
    </>
  )
}

export default Header
