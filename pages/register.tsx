import { ReactElement } from 'react'
import Layout from '../components/layout/Layout'
import Register from '../components/auth/Register'

const RegisterPage = () => {
  return <Register />
}

export default RegisterPage

RegisterPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Register'>{content}</Layout>
}
