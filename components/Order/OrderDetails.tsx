import AlertStatus from './AlertStatus'
import { CCard, CCol, CContainer, CFormInput, CRow } from '@coreui/react'
import OrderItem from './OrderItem'

const OrderDetails = () => {
  return (
    <CContainer className='p-0 my-5'>
      <h3 className='fw-bold mb-5'>Detail Pesanan</h3>
      <CRow className='mx-3 mx-md-5'>
        <CCol xs={12} md={8} className='p-0 pe-md-5'>
          <AlertStatus status='pengiriman' />
          <CCard className='pt-4 px-5'>
            <OrderItem />
            <OrderItem />
            <OrderItem />
          </CCard>
        </CCol>

        {/* Payment Details */}
        <CCol className='p-0 ps-md-4 mt-3 mt-md-0'>
          <CCard className='p-4'>
            <div className='mb-3'>
              <h5 className='fw-bold'>Alamat Pengiriman</h5>
              <CFormInput
                className='bg-white border-0 border-bottom border-2 rounded-0 ps-2 py-0'
                value='Jl. Singkong, No. 15, Dekat Lap...'
                disabled
              />
            </div>
            <div className='mb-3'>
              <h5 className='fw-bold'>Voucher Belanja</h5>
              <CFormInput
                className='bg-white border-0 border-bottom border-2 rounded-0 ps-2 py-0'
                value='ASIKGRATIS10K'
                disabled
              />
            </div>
            <div>
              <h5 className='fw-bold'>Total harga</h5>
              <h5 className='text-gray m-0 text-decoration-line-through'>
                Rp.27.000,-
              </h5>
              <h5 className='text-success m-0 mt-2'>Rp.17.000,-</h5>
            </div>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default OrderDetails
