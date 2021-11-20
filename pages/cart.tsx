import { CCol, CContainer, CRow } from '@coreui/react'
import type { ReactElement } from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import { OrderItem, OrderDetails } from '../components/Order'

const Cart = () => {
  return (
    <CContainer className='p-0 mt-5'>
      <h3 className='fw-bold mb-5'>Keranjang Belanja Anda</h3>
      <CRow className='mx-5'>
        <CCol sm={8} className='p-0 pe-5'>
          <Card style='pt-4 px-5'>
            <OrderItem />
            <OrderItem />
          </Card>
        </CCol>
        <CCol className='p-0 ps-4'>
          <Card style='py-4 px-4'>
            <OrderDetails />
          </Card>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default Cart

Cart.getLayout = function getLayout(content: ReactElement) {
  return (
    <Layout isCustomer={true} footerOff={true}>
      {content}
    </Layout>
  )
}
