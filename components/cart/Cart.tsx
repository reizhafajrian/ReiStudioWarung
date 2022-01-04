import { RootStateOrAny, useSelector } from 'react-redux'
import CartForm from './CartForm'
import CartProducts from './CartProducts'
import { CCard, CCol, CContainer, CRow } from '@coreui/react'

const Cart = ({ user }: any) => {
  const { cartItems } = useSelector((state: RootStateOrAny) => state.cart)

  return (
    <CContainer className='p-0 my-5'>
      <h3 className='fw-bold mb-5 ms-3 ms-md-0'>Keranjang Belanja Anda</h3>
      <CRow className='mx-3 mx-md-5'>
        <CCol xs={12} md={8} className='p-0 pe-md-5'>
          {cartItems.length > 0 ? <CartProducts /> : <h1>Keranjang kosong</h1>}
        </CCol>
        <CCol className='p-0 ps-md-4 mt-3 mt-md-0'>
          <CCard className='p-4'>
            <CartForm user={user} />
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Cart
