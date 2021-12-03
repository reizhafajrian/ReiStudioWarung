import type { ReactElement } from 'react'
import Layout from '../../../components/layout/Layout'
import AllOrders from '../../../components/admin/AllOrders'

const AllOrdersPage = () => {
  return <AllOrders />
}

export default AllOrdersPage

AllOrdersPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout isAdmin={true}>{content}</Layout>
}
