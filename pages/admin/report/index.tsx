import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Report from '@components/admin/report/Report'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const ReportPage = (props: any) => {
  return <Report report={props} result={props.result} />
}

export default ReportPage

ReportPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Report'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page: any = query.page || 1
  const s = query.s || 'all'
  const e = query.e || 'all'

  const data: any = await Get(
    `/admin/reports?s=${s}&e=${e}&limit=${page * 6}`,
    token
  )

  return {
    props: data,
  }
}
