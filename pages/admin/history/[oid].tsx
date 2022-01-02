import type { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import DetailOrder from '@components/admin/order/DetailOrder'
import { Get } from 'utils/axios'
import { getCookie } from 'cookies-next'

const DetailOrderPage = (props: any) => {
  return <DetailOrder order={props.order} user={props.user} />
}

export default DetailOrderPage

DetailOrderPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Detail Order'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, params }: any) => {
  const oid = params.oid
  const token = getCookie('token', { req, res })

  const data = await Get(`/orders?id=${oid}`, token)

  return {
    props: data,
  }
}
