import type { ReactElement } from 'react'
import Layout from '../../../components/layout/Layout'
import DetailOrder from '../../../components/admin/DetailOrder'

const DetailOrderPage = () => {
  return <DetailOrder />
}

export default DetailOrderPage

DetailOrderPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout isAdmin={true}>{content}</Layout>
}
