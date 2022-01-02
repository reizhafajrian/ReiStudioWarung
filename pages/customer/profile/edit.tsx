import { ReactElement } from 'react'
import ProfileEdit from '@components/customer/ProfileEdit'
import Layout from '@components/layout/Layout'
import { getCookie } from 'cookies-next'
import { Get } from 'utils/axios'

const EditProfile = (props: any) => {
  return <ProfileEdit user={props.user} />
}

export default EditProfile

EditProfile.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Edit Profile'>{content}</Layout>
}

export const getServerSideProps = async ({ req, res }: any) => {
  const token = getCookie('token', { req, res })

  const user: any = await Get('/customer', token)

  return {
    props: user,
  }
}
