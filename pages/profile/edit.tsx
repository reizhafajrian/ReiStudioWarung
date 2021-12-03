import { ReactElement } from 'react'
import Layout from '../../components/layout/Layout'
import ProfileEdit from '../../components/user/ProfileEdit'

const EditProfile = () => {
  return <ProfileEdit />
}

export default EditProfile

EditProfile.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Edit Profile'>{content}</Layout>
}
