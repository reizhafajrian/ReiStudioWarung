import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import UpdateProduct from '@components/admin/product/UpdateProduct'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const UpdateProductPage = ({ product, c }: any) => {
  return <UpdateProduct product={product} categories={c} />
}

export default UpdateProductPage

UpdateProductPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Update Product'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, params }: any) => {
  const pid = params.pid
  const token = getCookie('token', { req, res })

  const data: any = await Get(`/admin/products?id=${pid}`, token)
  const cat: any = await Get('/products/categories', token)
  return {
    props: {
      product: data.product,
      c: cat.categories,
    },
  }
}
