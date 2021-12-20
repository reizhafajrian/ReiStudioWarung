import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Report from '@components/admin/Report'

const ReportPage = () => {
  return <Report />
}

export default ReportPage

ReportPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Report'>{content}</Layout>
}
