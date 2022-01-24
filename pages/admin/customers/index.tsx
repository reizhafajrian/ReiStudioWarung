import type { ReactElement } from 'react'
import AllCustomers from '@components/admin/customer/AllCustomers'
import Layout from '@components/layout/Layout'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const AllCustomersPage = ({ cData, vData }: any) => {
  console.log(vData)

  return (
    <AllCustomers
      customers={cData.customers}
      vouchers={vData.vouchers}
      result={cData.result}
    />
  )
}

export default AllCustomersPage

AllCustomersPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Customers'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page: any = query.page || 1

  const cData: any = await Get(`/admin/customers?limit=${page * 6}`, token)

  const vData: any = await Get('/admin/vouchers', token)
  return {
    props: {
      cData,
      vData,
    },
  }
}
