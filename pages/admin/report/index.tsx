import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Report from '@components/admin/report/Report'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const ReportPage = (props: any) => {
  console.log(props)

  return <Report report={props} />
}

export default ReportPage

ReportPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Report'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page: any = query.page || 1
  const status = query.status || 'all'

  // const data: any = await Get(
  //   `/admin/orders?limit=${page * 6}&status=${status}`,
  //   token
  // )

  const data: any = await Get(`/admin/reports`, token)

  return {
    props: data,
  }
}
