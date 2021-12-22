import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import DetailOrder from '@components/admin/order/DetailOrder'

const DetailOrderPage = () => {
  return <DetailOrder />
}

export default DetailOrderPage

DetailOrderPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Detail Order'>{content}</Layout>
}
