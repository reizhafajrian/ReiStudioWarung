import { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Products from '@components/product/Products'

const ProductsPage = (props: any) => {
  return (
    <Products
      products={props.products ? props.products : []}
      result={props.result}
    />
  )
}

export default ProductsPage

ProductsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Products'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async ({ query }: any) => {
  const page = query.page || 1
  const category = query.category || 'all'
  const sort = query.sort || ''
  const search = query.search || 'all'

  const res = await fetch(
    `http://localhost:3000/api/products?limit=${
      page * 6
    }&category=${category}&sort=${sort}&search=${search}`
  )

  const data = await res.json()

  return {
    props: data,
  }
}
