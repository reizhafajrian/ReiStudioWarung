import { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Cart from '@components/cart/Cart'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const CartPage = (props: any) => {
  return <Cart user={props.user} />
}

export default CartPage

CartPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Keranjang'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res }: any) => {
  const token = getCookie('token', { req, res })

  const user: any = await Get('/customer', token)

  return {
    props: user,
  }
}
