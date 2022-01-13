import Register from '@components/auth/Register'
import Header from '@components/layout/Header'
import Layout from '@components/layout/Layout'
import { RootStateOrAny, useSelector } from 'react-redux'

const RegisterPage = () => {
  const state = useSelector((state: RootStateOrAny) => state)
  return (
    <>
      {state.user.role === 1 ? (
        <Layout pageTitle='Register Akun'>
          <Register forAdmin={true} />
        </Layout>
      ) : (
        <Register forAdmin={true} />
      )}
    </>
  )
}

export default RegisterPage
