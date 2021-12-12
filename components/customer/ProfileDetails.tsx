import Image from 'next/image'
import Link from 'next/link'
import BadgeStatus from '../BadgeStatus'
import { RiPencilFill } from 'react-icons/ri'
import { CButton, CCard } from '@coreui/react'

const ProfileDetails = () => {
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
              <Image
                src='/images/logo.jpg'
                alt='profile'
                height={80}
                width={80}
              />
            </div>
            <div className='ms-4 ps-2' style={{ width: 500 }}>
              <h5 className='fw-bold mb-3'>
                Johnny Doe&nbsp;&nbsp;&nbsp;
                <span className='text-secondary fw-normal'>jonni_e</span>
              </h5>
              <div className='text-gray'>
                <h5 className='mb-3'>+6281234567890</h5>
                <h5 className='mb-0'>
                  Jalan Merpati Kuning no. 19, Komplek Kandang Hewan, Cilandak,
                  Jakarta Selatan
                </h5>
              </div>
            </div>
            <div>
              <Link href='/customer/profile/edit'>
                <a className='text-dark'>
                  Edit profil <RiPencilFill style={{ height: 20, width: 20 }} />
                </a>
              </Link>
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
                  <Link href='/profile/detail-pesanan/1234'>
                    <a className='text-dark fw-bold'>Lihat detail pesanan</a>
                  </Link>
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
