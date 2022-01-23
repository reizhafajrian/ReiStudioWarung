import type { ReactElement } from 'react'
import AllCustomers from '@components/admin/customer/AllCustomers'
import Layout from '@components/layout/Layout'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const AllCustomersPage = (props: any) => {
  return <AllCustomers customers={props.customers} result={props.result} />
}

export default AllCustomersPage

AllCustomersPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Customers'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page: any = query.page || 1

  const data: any = await Get(`/admin/customers?limit=${page * 6}`, token)

  return {
    props: data,
  }
}
