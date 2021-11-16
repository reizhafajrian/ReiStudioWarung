import type { ReactElement } from 'react'
import Layout from '../../components/Layout'

const Dashboard = () => {
  return (
    <div>
      <h1>dashboard</h1>
    </div>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(content: ReactElement) {
  return <Layout isAdmin={true}>{content}</Layout>
}
