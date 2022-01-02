import { ReactElement } from 'react'
import Home from '@components/Home'
import Layout from '@components/layout/Layout'
import { Get } from 'utils/axios'
import { getCookie } from 'cookies-next'

export default function HomePage(props: any) {
  return <Home products={props.products} />
}

HomePage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Home'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page = query.page || 1

  const data: any = await Get(
    `/products?sort=terlaris&category=all&search=all`,
    token
  )

  return { props: data }
}
