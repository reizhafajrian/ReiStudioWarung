import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { IoBasket } from 'react-icons/io5'
import {
  CAvatar,
  CButton,
  CContainer,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CHeader,
  CHeaderBrand,
} from '@coreui/react'
import Nav from './Nav'

interface props {
  pageTitle: string
  loggedIn: boolean
  isAdmin: boolean
}

const Header = ({ pageTitle, loggedIn, isAdmin }: props) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Warung | {pageTitle}</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>

      <CHeader
        className='border-0 align-items-center justify-content-between'
        style={{
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '0 0 20px 20px',
        }}
        position='sticky'
      >
        <CContainer className='py-2'>
          <Link href={isAdmin ? '/admin' : '/'} passHref>
            <CHeaderBrand className='d-flex align-items-center p-0 m-0'>
              <Image
                src='/images/logo.jpg'
                alt='logo'
                width='40'
                height='40'
                objectFit='contain'
              />
              <h5 className='text-light fw-bold m-0 ms-3'>
                Nama Warung
                {isAdmin && (
                  <span className='text-primary'>&nbsp;for Admin</span>
                )}
              </h5>
            </CHeaderBrand>
          </Link>
          {!loggedIn && (
            <>
              <Nav />
              <div>
                <CButton
                  onClick={() => router.push('/login')}
                  size='lg'
                  variant='outline'
                  className='me-2'
                >
                  Masuk
                </CButton>
                <CButton onClick={() => router.push('/register')} size='lg'>
                  Daftar
                </CButton>
              </div>
            </>
          )}

          {loggedIn &&
            (isAdmin ? (
              <>
                <Nav isAdmin={true} />
                <p className='text-light fw-bold m-0'>Admin Warung</p>
              </>
            ) : (
              <>
                {/* keranjang */}
                <Link href='/cart' passHref>
                  <IoBasket fill='#ff9090' size='2rem' cursor='pointer' />
                </Link>
                {/* profile */}
                <CDropdown>
                  <CDropdownToggle
                    caret={false}
                    className='bg-white border-0 p-0 ms-2'
                    style={{ boxShadow: 'none' }}
                  >
                    <CAvatar color='secondary' />
                  </CDropdownToggle>
                  <CDropdownMenu
                    className='border-0 mt-5'
                    style={{
                      marginLeft: '-3rem',
                      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    }}
                  >
                    <CDropdownItem href='/profile'>Profil</CDropdownItem>
                    <CDropdownItem href='/settings'>Pengaturan</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </>
            ))}
        </CContainer>
      </CHeader>
    </>
  )
}

export default Header
