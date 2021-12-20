import { ReactElement } from 'react'
import Settings from '@components/customer/Settings'
import Layout from '@components/layout/Layout'

const SettingsPage = () => {
  return <Settings />
}

export default SettingsPage

SettingsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Settings'>{content}</Layout>
}
