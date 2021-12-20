import Image from 'next/image'
import BadgeStatus from '../BadgeStatus'
import { RiPencilFill } from 'react-icons/ri'
import { CAvatar, CButton, CCard } from '@coreui/react'
import { useRouter } from 'next/router'
import { RootStateOrAny, useSelector } from 'react-redux'

const ProfileDetails = () => {
  const router = useRouter()

  const { user } = useSelector((state: RootStateOrAny) => state.user)

  function getFirstWord(name: string): string {
    return name?.charAt(0).toUpperCase()
  }

  return (
    <div className='min-h-100 w-100 position-relative d-flex mb-5'>
      <div
        className='position-absolute bg-light w-100'
        style={{ top: '-1rem', height: '16rem', zIndex: -1 }}
      ></div>
      <div className='mx-auto' style={{ marginTop: '6rem' }}>
        <CCard className='p-5 mb-2'>
          <div className='d-flex'>
            <div>
              <CAvatar color='secondary' size='xl'>
                {getFirstWord(user.name)}
              </CAvatar>
            </div>
            <div className='ms-4 ps-2' style={{ width: 500 }}>
              <h5 className='fw-bold mb-3'>
                {user.name}&nbsp;&nbsp;&nbsp;
                <span className='text-secondary fw-normal'>
                  {user.username}
                </span>
              </h5>
              <div className='text-gray'>
                <h5 className='mb-3'>{user.phone}</h5>
                <h5 className='mb-0'>{user.address}</h5>
              </div>
            </div>
            <div>
              <a
                className='text-dark'
                onClick={() => router.push('/customer/profile/edit')}
                style={{ cursor: 'pointer' }}
              >
                Edit profil <RiPencilFill style={{ height: 20, width: 20 }} />
              </a>
            </div>
          </div>
        </CCard>
        <div className='mt-4 d-flex justify-content-between'>
          <div className='flex-grow-1 me-4'>
            <CCard className='p-4 text-center'>
              <h5 className='fw-bold'>Riwayat Pesanan Anda</h5>
              <div className='my-4 d-flex justify-content-between'>
                <div className='d-flex'>
                  <div>
                    <Image
                      className='product-img__sm'
                      src='https://picsum.photos/200'
                      alt='product'
                      width={80}
                      height={80}
                    />
                  </div>
                  <div className='ms-3'>
                    <p className='text-gray fw-bold mb-1'>24/07/21</p>
                    <p className='mb-1'>10 barang</p>
                    <p className='text-secondary'>
                      <small>Rp250.000</small>
                    </p>
                  </div>
                </div>
                <div>
                  <a
                    className='text-dark fw-bold'
                    onClick={() => router.push('/profile/detail-pesanan/1234')}
                  >
                    Lihat detail pesanan
                  </a>
                  <BadgeStatus bg='warning' title='Pembayaran' />
                </div>
              </div>
              <div className='mx-auto'>
                <CButton className='w-100'>Muat lebih banyak</CButton>
              </div>
            </CCard>
          </div>
          <div>
            <CCard className='py-4 px-5 mb-4 text-center'>
              <h5 className='text-secondary fw-bold'>
                Total Pesanan
                <br />
                Bulan ini
              </h5>
              <h2 className='fw-bold mt-4 mb-5'>15</h2>
            </CCard>
            <CCard className='py-4 px-5 text-center'>
              <h5 className='text-secondary fw-bold'>
                Total Pengeluaran
                <br />
                Bulan ini
              </h5>
              <h2 className='fw-bold mt-4 mb-5'>Rp235,5rb</h2>
            </CCard>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileDetails
