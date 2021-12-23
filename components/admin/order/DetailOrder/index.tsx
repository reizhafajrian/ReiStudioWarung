import OrderItem from '@components/order/OrderItem'
import { CCol, CContainer, CRow } from '@coreui/react'
import ButtonKirim from './ButtonKirim'
import DetailCustomer from './DetailCustomer'

const DetailOrder = () => {
  return (
    <CContainer className='my-5'>
      <h4 className='fw-bold m-0 mb-4'>Detail Pesanan</h4>
      <CRow className='px-3'>
        <DetailCustomer />
      </CRow>
      <CRow className='px-3 my-4'>
        <CCol
          md={5}
          className='flex-grow-1 bg-white p-4'
          style={{ borderRadius: 20 }}
        >
          <OrderItem />
          <OrderItem />
          <OrderItem />
        </CCol>
        <CCol
          className='ms-md-4 bg-white p-4 d-flex'
          style={{ borderRadius: 20 }}
        >
          <CRow>
            <CCol className='text-end'>
              <h5 className='lh-lg fw-bold'>Kirim barang: </h5>
              <h5 className='lh-lg fw-bold'>Komplen: </h5>
            </CCol>
            <CCol xs='auto' className='mt-1'>
              <ButtonKirim status='komplain' />
              <h5 className='lh-lg '>-</h5>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default DetailOrder
