import type { ReactElement } from 'react'
import Layout from '../components/Layout'

const Contact = () => {
  return <h1 className='text-center'>Contact page</h1>
}

export default Contact

Contact.getLayout = function getLayout(content: ReactElement) {
  return <Layout>{content}</Layout>
}
