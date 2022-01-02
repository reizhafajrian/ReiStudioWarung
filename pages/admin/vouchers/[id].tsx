import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import UpdateVoucher from '@components/admin/voucher/UpdateVoucher'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const UpdateVoucherPage = (props: any) => {
  return <UpdateVoucher voucher={props.voucher} />
}

export default UpdateVoucherPage

UpdateVoucherPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Update Voucher'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, params }: any) => {
  const id = params.id
  const token = getCookie('token', { req, res })

  const data = await Get(`/vouchers?id=${id}`, token)

  return {
    props: data,
  }
}
