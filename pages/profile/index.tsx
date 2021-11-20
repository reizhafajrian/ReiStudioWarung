import type { ReactElement } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Card from '../../components/Card'
import Layout from '../../components/Layout'
import { RiPencilFill } from 'react-icons/ri'
import Button from '../../components/Button'

const CustomerProfile = () => {
  return (
    <div className='min-h-100 w-100 position-relative d-flex'>
      <div
        className='position-absolute bg-light w-100'
        style={{ top: '-1rem', height: '16rem', zIndex: -1 }}
      ></div>
      <div className='mx-auto' style={{ marginTop: '6rem' }}>
        <Card style='p-5 mb-2'>
          <div className='d-flex'>
            <div>
              <Image src='/logo.jpg' alt='profile' height={80} width={80} />
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
              <Link href='/profile/edit'>
                <a className='text-dark'>
                  Edit profil <RiPencilFill style={{ height: 20, width: 20 }} />
                </a>
              </Link>
            </div>
          </div>
        </Card>
        <div className='mt-4 d-flex justify-content-between'>
          <div className='flex-grow-1 me-4'>
            <Card style='p-4 text-center'>
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
                  <Link href=''>
                    <a className='text-dark fw-bold'>Lihat detail pesanan</a>
                  </Link>
                  <div
                    className='bg-warning text-white fw-bold mt-3 p-2'
                    style={{ borderRadius: 20 }}
                  >
                    <p className='m-0'>Pembayaran</p>
                  </div>
                </div>
              </div>
              <div className='mx-auto'>
                <Button
                  style='bg-dark text-white px-3 py-2'
                  title='Muat lebih banyak'
                  borderRadius='12px'
                  path=''
                />
              </div>
            </Card>
          </div>
          <div>
            <Card style='py-4 px-5 mb-4 text-center'>
              <h5 className='text-secondary fw-bold'>
                Total Pesanan
                <br />
                Bulan ini
              </h5>
              <h2 className='fw-bold mt-4 mb-5'>15</h2>
            </Card>
            <Card style='py-4 px-5 text-center'>
              <h5 className='text-secondary fw-bold'>
                Total Pengeluaran
                <br />
                Bulan ini
              </h5>
              <h2 className='fw-bold mt-4 mb-5'>Rp235,5rb</h2>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CustomerProfile

CustomerProfile.getLayout = function getLayout(content: ReactElement) {
  return (
    <Layout isCustomer={true} footerOff={true}>
      {content}
    </Layout>
  )
}
