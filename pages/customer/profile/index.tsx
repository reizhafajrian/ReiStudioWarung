import { ReactElement } from 'react'
import Layout from '@components/layout/Layout'
import ProfileDetails from '@components/customer/ProfileDetails'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const ProfileDetailsPage = ({ orders, result, total, jumlah, user }: any) => {
  return (
    <ProfileDetails
      orders={orders}
      result={result}
      total={total}
      jumlah={jumlah}
      user={user}
    />
  )
}

export default ProfileDetailsPage

ProfileDetailsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Profile'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res, query }: any) => {
  const token = getCookie('token', { req, res })
  const page: any = query.page || 1

  const data: any = await Get(`/customer/orders?limit=${page * 3}`, token)
  const user: any = await Get('/customer', token)

  await Get(`/customer/orders?limit=100`, token)

  return {
    props: {
      orders: data.orders,
      result: data.result,
      total: data.cmExpense,
      jumlah: data.cmOrders,
      user: user.user,
    },
  }
}
