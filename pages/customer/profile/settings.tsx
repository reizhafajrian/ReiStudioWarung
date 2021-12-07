import { ReactElement } from 'react'
import Layout from '../../components/layout/Layout'
import Settings from '../../components/user/Settings'

const SettingsPage = () => {
  return <Settings />
}

export default SettingsPage

SettingsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Settings'>{content}</Layout>
}
