import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import AllOrders from '@components/admin/order/AllOrders'

const AllOrdersPage = () => {
  return <AllOrders />
}

export default AllOrdersPage

AllOrdersPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='History'>{content}</Layout>
}
