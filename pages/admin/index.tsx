import type { ReactElement } from 'react'
import Layout from '../../components/layout/Layout'
import Dashboard from '../../components/admin/Dashboard'

const DashboardPage = () => {
  return <Dashboard />
}

export default DashboardPage

DashboardPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Dashboard'>{content}</Layout>
}
