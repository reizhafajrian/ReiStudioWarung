import { ReactElement } from 'react'
import ProfileEdit from '@components/customer/ProfileEdit'
import Layout from '@components/layout/Layout'

const EditProfile = () => {
  return <ProfileEdit />
}

export default EditProfile

EditProfile.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Edit Profile'>{content}</Layout>
}
