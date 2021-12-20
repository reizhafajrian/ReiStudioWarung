import type { ReactElement } from 'react'
import AllProducts from '@components/admin/AllProducts'
import Layout from '@components/layout/Layout'

const AllProductsPage = ({ products }: any) => {
  return <AllProducts products={products} />
}

export default AllProductsPage

AllProductsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Products'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')

  const data = await res.json()

  return { props: { products: data } }
}
