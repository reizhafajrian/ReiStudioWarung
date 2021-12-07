import { ReactElement } from 'react'
import Login from '../../components/auth/Login'
import Layout from '../../components/layout/Layout'

const LoginPage = () => {
  return <Login />
}

export default LoginPage

LoginPage.getLayout = function getLayout(content: ReactElement) {
  return <Layout pageTitle='Login'>{content}</Layout>
}
