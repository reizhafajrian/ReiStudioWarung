import { ReactElement } from 'react'
import Home from '../../components/Home'
import Layout from '../../components/layout/Layout'

export default function HomePage({ products }: any) {
  return <Home products={products} />
}

HomePage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Home'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')

  const data = await res.json()

  return { props: { products: data } }
}
