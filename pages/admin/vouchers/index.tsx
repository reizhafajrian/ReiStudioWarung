import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import Vouchers from '@components/admin/voucher/Vouchers'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const VouchersPage = (props: any) => {
  return <Vouchers vouchers={props.vouchers} />
}

export default VouchersPage

VouchersPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Vouchers'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })

  const data: any = await Get('/admin/vouchers', token)

  return {
    props: data,
  }
}
