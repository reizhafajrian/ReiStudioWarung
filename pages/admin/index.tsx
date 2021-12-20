import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Dashboard from '@components/admin/Dashboard'

const DashboardPage = ({ products }: any) => {
  return <Dashboard products={products} />
}

export default DashboardPage

DashboardPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Dashboard'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')

  const data = await res.json()

  return { props: { products: data } }
}
