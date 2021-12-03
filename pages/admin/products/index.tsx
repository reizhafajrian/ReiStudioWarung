import type { ReactElement } from 'react'
import AllProducts from '../../../components/admin/AllProducts'
import Layout from '../../../components/layout/Layout'

const AllProductsPage = () => {
  return <AllProducts />
}

export default AllProductsPage

AllProductsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Products'>{content}</Layout>
}
