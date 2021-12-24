import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import cookie from 'js-cookie'
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
import { MdClose } from 'react-icons/md'
import { FiMenu } from 'react-icons/fi'
import Modal from '../Modal'

const Header = () => {
  const [visible, setVisible] = useState(false)
  const [navbarOpen, setNavbarOpen] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUser())
  }, [dispatch])

  const { loggedIn, forAdmin } = useSelector(
    (state: RootStateOrAny) => state.user
  )
  const logout = () => {
    cookie.remove('cart')
    cookie.remove('token')
    router.push('/admin/login')
  }

  return (
    <CHeader className='border-0 align-items-center' position='sticky'>
      <CContainer className='py-2 position-relative'>
        <Link href={forAdmin ? '/admin' : '/customer'} passHref>
          <CHeaderBrand className='header-item d-flex align-items-center p-0 m-0'>
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
        <CButton
          className={`ms-auto d-md-none w-auto `}
          style={{ borderRadius: 0 }}
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          {navbarOpen ? <MdClose size={24} /> : <FiMenu size={24} />}
        </CButton>
        {loggedIn ? (
          forAdmin ? (
            <>
              <Nav navbarOpen={navbarOpen} />
              <div
                className={`${
                  navbarOpen ? 'd-block' : 'd-none'
                } mx-auto d-md-block header-item end-0`}
              >
                {/* <p className='text-light fw-bold m-0'>Admin Warung</p> */}
                <CButton
                  onClick={() => setVisible(!visible)}
                  size='lg'
                  variant='outline'
                >
                  Logout
                </CButton>
              </div>
            </>
          ) : (
            <>
              <Nav navbarOpen={navbarOpen} />
              <div
                className={`${
                  navbarOpen ? 'd-block' : 'd-none'
                } mx-auto d-md-block header-item end-0`}
              >
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
            <div className='header-item end-0 mt-2 mt-md-0 mx-auto mx-md-0'>
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
      {/* Modal Start*/}
      <Modal visible={visible} setVisible={setVisible}>
        <h3 className='fw-bold mb-5 text-center'>
          Apakah anda yakin ingin <span className='d-md-block'>keluar?</span>
        </h3>
        <div className='d-flex justify-content-between px-md-4 pt-3'>
          <CButton
            size='lg'
            variant='outline'
            onClick={() => setVisible(!visible)}
          >
            Batal
          </CButton>
          <CButton size='lg' onClick={logout}>
            Ya
          </CButton>
        </div>
      </Modal>
      {/* Modal End */}
    </CHeader>
  )
}

export default Header
