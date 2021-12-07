import type { ReactElement } from 'react'
import Layout from '../../../components/layout/Layout'
import OrderDetails from '../../../components/order/OrderDetails'

const OrderDetailsPage = () => {
  return <OrderDetails />
}

export default OrderDetailsPage

OrderDetailsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Detail Pemesanan'>{content}</Layout>
} 
