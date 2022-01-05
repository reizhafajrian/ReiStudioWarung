import { ReactElement } from 'react'
import { Get } from 'utils/axios'
import { getCookie } from 'cookies-next'
import Layout from '@components/layout/Layout'
import Products from '@components/product/Products'

const ProductsPage = ({ p, categories }: any) => {
  console.log(p)

  return (
    <Products
      products={p.products || []}
      result={p.result}
      categories={categories}
    />
  )
}

export default ProductsPage

ProductsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Products'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page = query.page || 1
  const category = query.category || 'all'
  const sort = query.sort || ''
  const search = query.search || 'all'

  const data: any = await Get(
    `/products?limit=${
      page * 8
    }&category=${category}&sort=${sort}&search=${search}`,
    token
  )

  const cat: any = await Get('/products/categories', token)

  return {
    props: {
      p: data,
      categories: cat.categories,
    },
  }
}
