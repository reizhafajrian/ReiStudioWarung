import OrderItem from '@components/order/OrderItem'
import { CCol, CContainer, CRow } from '@coreui/react'
import ButtonKirim from './ButtonKirim'
import DetailCustomer from './DetailCustomer'

const DetailOrder = ({ user, order }: any) => {
  return (
    <CContainer className='my-5'>
      <h4 className='fw-bold m-0 mb-4'>Detail Pesanan</h4>
      <CRow className='px-3'>
        <DetailCustomer user={user} order={order} />
      </CRow>
      <CRow className='px-3 my-4'>
        <CCol
          md={5}
          className='flex-grow-1 bg-white p-4'
          style={{ borderRadius: 20 }}
        >
          <OrderItem items={order.cart} />
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
              <ButtonKirim status={order.status} />
              <h5 className='lh-lg '>
                {order.status.title === 'komplain' ||
                order.status.title === 'komplain diproses'
                  ? order.status.content
                  : '-'}
              </h5>
            </CCol>
          </CRow>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default DetailOrder
