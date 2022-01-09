import { ReactElement, useEffect } from 'react'
import Layout from '@components/layout/Layout'
import Dashboard from '@components/admin/Dashboard'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'
import { useRouter } from 'next/router'

const DashboardPage = ({ reports, products, orders, vouchers }: any) => {
  const router = useRouter()

  useEffect(() => {
    if (!getCookie('token')) {
      router.push('/admin/login')
    }
  }, [router])

  return (
    <>
      <Dashboard
        reports={reports}
        products={products}
        orders={orders}
        vouchers={vouchers}
      />
    </>
  )
}

export default DashboardPage

DashboardPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Dashboard'>{content}</Layout>
}

// fetching data
export const getServerSideProps = async ({ req, res }: any) => {
  const token = getCookie('token', { req, res })

  const orderReq: any = await Get('/admin/orders?limit=5&status=all', token)
  const productReq: any = await Get('/products?category=all&search=all', token)
  const voucherReq: any = await Get('/admin/vouchers', token)
  const reportReq: any = await Get(`/admin/reports?s=all&e=all`, token)

  return {
    props: {
      products: productReq.products || null,
      orders: orderReq.orders || null,
      vouchers: voucherReq.vouchers || null,
      reports: reportReq || null,
    },
  }
}
