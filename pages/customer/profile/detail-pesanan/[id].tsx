import { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import OrderDetails from '@components/order/OrderDetails'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const OrderDetailsPage = (props: any) => {
  return <OrderDetails order={props.order} user={props.user} />
}

export default OrderDetailsPage

OrderDetailsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Detail Pemesanan'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, params }: any) => {
  const oid = params.id
  const token = getCookie('token', { req, res })

  const data = await Get(`/orders?id=${oid}`, token)

  return {
    props: data,
  }
}
