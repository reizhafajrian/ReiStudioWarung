import type { ReactElement } from 'react'
import Layout from '../../components/layout/Layout'
import Cart from '../../components/order/Cart'

const CartPage = () => {
  return <Cart />
}

export default CartPage

CartPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Keranjang'>{content}</Layout>
}
