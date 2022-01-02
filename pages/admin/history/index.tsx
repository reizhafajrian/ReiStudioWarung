import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import AllOrders from '@components/admin/order/AllOrders'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const AllOrdersPage = (props: any) => {
  console.log(props)

  return <AllOrders orders={props.orders} result={props.result} />
}

export default AllOrdersPage

AllOrdersPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='History'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page: any = query.page || 1
  const status = query.status || 'all'

  const data: any = await Get(
    `/admin/orders?limit=${page * 6}&status=${status}`,
    token
  )

  return {
    props: data,
  }
}
