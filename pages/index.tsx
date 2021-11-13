import type { ReactElement } from 'react'
import Layout from '../components/Layout'

const Home = () => {
  return <h1 className='text-center'>Homepage</h1>
}

export default Home

Home.getLayout = function getLayout(content: ReactElement) {
  return <Layout>{content}</Layout>
}
