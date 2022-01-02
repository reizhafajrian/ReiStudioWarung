import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Dashboard from '@components/admin/Dashboard'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const DashboardPage = ({ products, orders, vouchers }: any) => {
  return (
    <>
      <Dashboard products={products} orders={orders} vouchers={vouchers} />
    </>
  )
}

export default DashboardPage

DashboardPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Dashboard'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })

  const orderReq: any = await Get('/admin/orders?limit=5&status=all', token)
  const productReq: any = await Get('/products?category=all&search=all', token)
  const voucherReq: any = await Get('/admin/vouchers', token)

  return {
    props: {
      products: productReq.products,
      orders: orderReq.orders,
      vouchers: voucherReq.vouchers,
    },
  }
}
