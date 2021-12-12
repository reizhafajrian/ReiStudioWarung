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
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getUser } from '../../redux/actions/loggedActions'

const Header = ({ pageTitle }: any) => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [])

  const { loggedIn, forAdmin } = useSelector(
    (state: RootStateOrAny) => state.user
  )

  return (
    <>
      <Head>
        <title>Warung | {pageTitle}</title>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <h1>
        {loggedIn}, {forAdmin}
      </h1>
      <CHeader
        className='border-0 align-items-center'
        style={{
          boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '0 0 20px 20px',
        }}
        position='sticky'
      >
        <CContainer className='py-2 position-relative'>
          <Link href={forAdmin ? '/admin' : '/customer'} passHref>
            <CHeaderBrand className='position-absolute d-flex align-items-center p-0 m-0'>
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

          {router.pathname !== '/admin/login' &&
            router.pathname !== '/customer/login' &&
            router.pathname !== '/customer/register' &&
            router.pathname !== '/admin/register' && (
              <>
                {!loggedIn && (
                  <>
                    <Nav />
                    <div className='mt-2 mt-md-0 mx-auto mx-md-0'>
                      <CButton
                        href={forAdmin ? '/admin/login' : '/customer/login'}
                        size='lg'
                        variant='outline'
                        className='me-2'
                      >
                        Masuk
                      </CButton>
                      <CButton
                        href={
                          forAdmin ? '/customer/login' : '/customer/register'
                        }
                        size='lg'
                      >
                        Daftar
                      </CButton>
                    </div>
                  </>
                )}

                {loggedIn &&
                  (forAdmin ? (
                    <>
                      <Nav forAdmin={true} />
                      <div className='position-absolute end-0'>
                        <p className='text-light fw-bold m-0'>Admin Warung</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <Nav />
                      <div className='position-absolute end-0'>
                        {/* keranjang */}
                        <Link href='/customer/cart' passHref>
                          <IoBasket
                            fill='#ff9090'
                            size='2rem'
                            cursor='pointer'
                          />
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
                            <CDropdownItem href='/customer/profile'>
                              Profil
                            </CDropdownItem>
                            <CDropdownItem href='/customer/settings'>
                              Pengaturan
                            </CDropdownItem>
                          </CDropdownMenu>
                        </CDropdown>
                      </div>
                    </>
                  ))}
              </>
            )}
        </CContainer>
      </CHeader>
    </>
  )
}

export default Header
