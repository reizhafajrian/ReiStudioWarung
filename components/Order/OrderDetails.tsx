import AlertStatus from './AlertStatus'
import { CCard, CCol, CContainer, CRow } from '@coreui/react'

const OrderDetails = () => {
  return (
    <CContainer className='p-0 mt-5'>
      <h3 className='fw-bold mb-5'>Detail Pesanan</h3>
      <CRow className='mx-5'>
        <CCol sm={8} className='p-0 pe-5'>
          <AlertStatus status={3} />
          <CCard className='p-5'>Product items</CCard>
        </CCol>
        <CCol className='p-0 ps-4'>
          <CCard className='p-5'>detail pemesanan</CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default OrderDetails
