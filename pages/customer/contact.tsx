import type { ReactElement } from 'react'
import Contact from '../../components/Contact'
import Layout from '../../components/layout/Layout'

const ContactPage = () => {
  return <Contact />
}

export default ContactPage

ContactPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Contact'>{content}</Layout>
}
