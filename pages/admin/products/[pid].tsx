import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import UpdateProduct from '@components/admin/UpdateProduct'

const UpdateProductPage = () => {
  return <UpdateProduct />
}

export default UpdateProductPage

UpdateProductPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Update Product'>{content}</Layout>
}
