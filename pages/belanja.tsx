import type { ReactElement } from 'react'
import Layout from '../components/Layout'

const Belanja = () => {
  return <h1 className='text-center'>Belanja page</h1>
}

export default Belanja

Belanja.getLayout = function getLayout(content: ReactElement) {
  return <Layout>{content}</Layout>
}
