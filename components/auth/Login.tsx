import { SyntheticEvent, useState } from 'react'
import Link from 'next/link'
import Cookie from 'js-cookie'
import InputField from '../InputField'
import { CButton, CCard, CForm } from '@coreui/react'
import { useRouter } from 'next/router'

interface props {
  forAdmin?: boolean
}

const Login = ({ forAdmin = false }: props) => {
  const router = useRouter()

  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')

  const [status, setStatus] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const userData = {
      emailOrUsername,
      password,
    }

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      Credential: 'include',
      body: JSON.stringify(userData),
    }

    const loginReq = await fetch(
      forAdmin ? '/api/admin/login' : '/api/customer/login',
      config
    )

    const loginRes = await loginReq.json()

    setStatus('success')

    Cookie.set('token', loginRes.token)

    return router.push('/')
  }

  return (
    <>
      <div className='text-gray text-center'>
        <h2 className='fw-bold lh-lg mb-0'>Masuk</h2>
        <h4 className='fw-normal lh-lg mb-5'>
          Masuk ke dalam akun anda untuk dapat memesan di website ini
        </h4>
      </div>
      <CCard className='p-4'>
        <CForm onSubmit={handleSubmit} className='pt-3 px-3'>
          <InputField
            secure={false}
            type='text'
            label='Username/Email'
            placeholder='Username/Email'
            onChange={setEmailOrUsername}
            value={emailOrUsername}
            id='email'
          />
          <InputField
            secure={true}
            type='password'
            label='Password'
            placeholder='Password'
            onChange={setPassword}
            value={password}
            id='pass'
          />
          <div className='text-center'>
            <CButton type='submit' size='lg'>
              Masuk
            </CButton>
            <p className='text-dark m-0 mt-3'>
              Belum punya akun? &nbsp;
              <Link href='/register'>
                <a className='text-dark fw-bold'>Daftar sekarang</a>
              </Link>
            </p>
          </div>
        </CForm>
      </CCard>
    </>
  )
}

export default Login
