import type { ReactElement } from 'react'
import Layout from '../../components/layout/Layout'
import ProfileDetails from '../../components/user/ProfileDetails'

const ProfileDetailsPage = () => {
  return <ProfileDetails />
}

export default ProfileDetailsPage

ProfileDetailsPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Profile'>{content}</Layout>
}
