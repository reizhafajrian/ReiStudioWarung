import type { ReactElement } from 'react'
import Layout from '../../components/layout/Layout'
import Vouchers from '../../components/admin/Vouchers'

const VouchersPage = () => {
  return <Vouchers />
}

export default VouchersPage

VouchersPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Report'>{content}</Layout>
}
