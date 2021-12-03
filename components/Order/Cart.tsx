import { CCard, CCol, CContainer, CRow } from '@coreui/react'
import CartItem from './CartItem'
import PaymentDetails from './PaymentDetails'

const Cart = () => {
  return (
    <CContainer className='p-0 my-5'>
      <h3 className='fw-bold mb-5'>Keranjang Belanja Anda</h3>
      <CRow className='mx-5'>
        <CCol sm={8} className='p-0 pe-5'>
          <CCard className='pt-4 px-5'>
            <CartItem />
            <CartItem />
          </CCard>
        </CCol>
        <CCol className='p-0 ps-4'>
          <CCard className='py-4 px-4'>
            <PaymentDetails />
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Cart
