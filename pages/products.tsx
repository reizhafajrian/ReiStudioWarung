import type { ReactElement } from 'react'
import Layout from '../components/layout/Layout'
import Products from '../components/Products'

const ProductsPage = () => {
  return <Products />
}

export default ProductsPage

ProductsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Products'>{content}</Layout>
}
