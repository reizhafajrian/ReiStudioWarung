import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import NewProduct from '@components/admin/product/NewProduct'

const AddProduct = () => {
  return <NewProduct />
}

export default AddProduct

AddProduct.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Add Product'>{content}</Layout>
}
