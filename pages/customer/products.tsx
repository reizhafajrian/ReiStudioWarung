import { ReactElement } from 'react'
import Layout from '../../components/layout/Layout'
import Products from '../../components/product/Products'

const ProductsPage = ({ products }) => {
  return <Products products={products} />
}

export default ProductsPage

ProductsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Products'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')

  const data = await res.json()

  return { props: { products: data } }
}
