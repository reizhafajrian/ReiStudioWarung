import type { ReactElement } from 'react'
import Layout from '../../components/Layout'

const CustomerProfile = () => {
  return <div>Profile</div>
}

export default CustomerProfile

CustomerProfile.getLayout = function getLayout(content: ReactElement) {
  return <Layout isCustomer={true}>{content}</Layout>
}
