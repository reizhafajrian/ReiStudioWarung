import type { ReactElement } from 'react'
import AllProducts from '@components/admin/product/AllProducts'
import Layout from '@components/layout/Layout'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const AllProductsPage = (props: any) => {
  return <AllProducts products={props.products} result={props.result} />
}

export default AllProductsPage

AllProductsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Products'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page = query.page || 1

  const data: any = await Get(
    `/products?limit=${page * 6}&category=all&search=all`,
    token
  )

  return { props: data }
}
