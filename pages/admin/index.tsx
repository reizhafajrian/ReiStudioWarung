import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Dashboard from '@components/admin/Dashboard'
import { RootStateOrAny, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const DashboardPage = ({ products }: any) => {
  const router = useRouter()
  const { loggedIn } = useSelector((state: RootStateOrAny) => state.user)

  if (!loggedIn) {
    router.push('/admin/login')
  }

  return <Dashboard products={products} />
}

export default DashboardPage

DashboardPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Dashboard'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async () => {
  const res = await fetch(
    'http://localhost:3000/api/products?category=all&search=all'
  )

  const data = await res.json()

  return { props: { products: data.products } }
}
