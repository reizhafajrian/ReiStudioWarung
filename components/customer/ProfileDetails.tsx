import { RiPencilFill } from 'react-icons/ri'
import { CAvatar, CButton, CCard, CCol, CRow } from '@coreui/react'
import { useRouter } from 'next/router'
import OrderHistory from '@components/order/OrderHistory'
import { useEffect, useState } from 'react'
import filterSearch from 'utils/filterSearch'

const ProfileDetails = ({ user, result, orders, total, jumlah }: any) => {
  const router = useRouter()
  const [page, setPage] = useState(1)

  const handleLoadMore = () => {
    setPage(page + 1)
    filterSearch({ router, page: page + 1 })
  }

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1)
  }, [router.query])

  function getFirstWord(name: string): string {
    return name?.charAt(0).toUpperCase()
  }

  return (
    <div className='min-h-100 w-100 position-relative d-flex mb-5'>
      <div
        className='position-absolute bg-light w-100'
        style={{ top: '-1rem', height: '16rem', zIndex: -1 }}
      ></div>
      <div className='w-100' style={{ marginTop: '8rem' }}>
        <CRow className='w-100 m-0'>
          <CCol xs={12} md={7} className='mx-auto'>
            {/* USER PROFILE */}
            <CCard className='p-5 mb-2'>
              <div className='d-flex flex-wrap'>
                <div className='d-flex flex-grow-1'>
                  <CAvatar color='secondary' size='xl'>
                    {getFirstWord(user.name)}
                  </CAvatar>
                  <div className='ms-4 ps-2'>
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
                </div>
                <div className='ms-auto mt-3 m-md-0'>
                  <a
                    className='text-dark'
                    onClick={() => router.push('/customer/profile/edit')}
                    style={{ cursor: 'pointer' }}
                  >
                    Edit profil{' '}
                    <RiPencilFill style={{ height: 20, width: 20 }} />
                  </a>
                </div>
              </div>
            </CCard>
            <div className='mt-4 d-flex flex-wrap justify-content-between'>
              <div className='flex-grow-1 me-md-4'>
                {/* RIWAYAT PESANAN */}
                <CCard className='p-4 mb-3 mb-md-0'>
                  <h5 className='fw-bold mb-4'>Riwayat Pesanan Anda</h5>
                  {orders
                    ? orders.map((order: any) => (
                        <OrderHistory key={order.order_id} order={order} />
                      ))
                    : ''}
                  <div className='mx-auto'>
                    {result < page * 3 ? (
                      ''
                    ) : (
                      <CButton onClick={handleLoadMore} className='w-100'>
                        Muat lebih banyak
                      </CButton>
                    )}
                  </div>
                </CCard>
              </div>
              <div className='flex-grow-1 flex-grow-md-0'>
                <CCard className='py-4 px-5 mb-4 text-center'>
                  <h5 className='text-secondary fw-bold'>
                    Total Pesanan
                    <br />
                    Bulan ini
                  </h5>
                  <h2 className='fw-bold mt-4 mb-5'>{orders ? jumlah : 0}</h2>
                </CCard>
                <CCard className='py-4 px-5 text-center'>
                  <h5 className='text-secondary fw-bold'>
                    Total Pengeluaran
                    <br />
                    Bulan ini
                  </h5>
                  <h2 className='fw-bold mt-4 mb-5'>
                    Rp.
                    {total.toLocaleString('id-ID') || '0'}
                    ,-
                  </h2>
                </CCard>
              </div>
            </div>
          </CCol>
        </CRow>
      </div>
    </div>
  )
}

export default ProfileDetails
