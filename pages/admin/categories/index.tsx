import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'
import Categories from '@components/admin/Categories'

const CategoriesPage = (props: any) => {
  return <Categories categories={props.categories} />
}

export default CategoriesPage

CategoriesPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Product Categories'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })

  const cat: any = await Get('/products/categories', token)

  return {
    props: cat,
  }
}
