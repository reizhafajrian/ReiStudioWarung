import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions/loggedActions'
import CartButton from './CartButton'
import Nav from './Nav'
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

const Header = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const { loggedIn, forAdmin } = useSelector(
    (state: RootStateOrAny) => state.user
  )

  return (
    <CHeader className='border-0 align-items-center' position='sticky'>
      <CContainer className='py-2 position-relative'>
        <Link href={forAdmin ? '/admin' : '/customer'} passHref>
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

        {loggedIn ? (
          forAdmin ? (
            <>
              <Nav />
              <div className='position-md-absolute end-0'>
                <p className='text-light fw-bold m-0'>Admin Warung</p>
              </div>
            </>
          ) : (
            <>
              <Nav />
              <div className='position-md-absolute end-0'>
                {/* keranjang */}
                <CartButton />
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
                    <CDropdownItem
                      onClick={() => router.push('/customer/profile')}
                    >
                      Profil
                    </CDropdownItem>
                    <CDropdownItem
                      onClick={() => router.push('/customer/profile/settings')}
                    >
                      Pengaturan
                    </CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </div>
            </>
          )
        ) : (
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
                href={forAdmin ? '/customer/login' : '/customer/register'}
                size='lg'
              >
                Daftar
              </CButton>
            </div>
          </>
        )}
      </CContainer>
    </CHeader>
  )
}

export default Header
