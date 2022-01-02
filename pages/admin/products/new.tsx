import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import NewProduct from '@components/admin/product/NewProduct'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const AddProduct = (props: any) => {
  return <NewProduct categories={props.categories} />
}

export default AddProduct

AddProduct.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Add Product'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, params }: any) => {
  const token = getCookie('token', { req, res })

  const cat: any = await Get('/products/categories', token)
  return {
    props: cat,
  }
}
