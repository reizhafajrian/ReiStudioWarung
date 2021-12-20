import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'

const UpdateVoucherPage = () => {
  return (
    <>
      <h1>edit voucher</h1>
    </>
  )
}

export default UpdateVoucherPage

UpdateVoucherPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Update Voucher'>{content}</Layout>
}
