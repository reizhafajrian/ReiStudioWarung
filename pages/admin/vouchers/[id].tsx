import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import UpdateVoucher from '@components/admin/voucher/UpdateVoucher'

const UpdateVoucherPage = () => {
  return (
    <>
      <UpdateVoucher />
    </>
  )
}

export default UpdateVoucherPage

UpdateVoucherPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Update Voucher'>{content}</Layout>
}
