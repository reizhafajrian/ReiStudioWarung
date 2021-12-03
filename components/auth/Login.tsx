import { useState } from 'react'
import Link from 'next/link'
import InputField from '../InputField'
import { CButton, CCard, CForm } from '@coreui/react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className='text-gray text-center'>
        <h2 className='fw-bold lh-lg mb-0'>Masuk</h2>
        <h4 className='fw-normal lh-lg mb-5'>
          Masuk ke dalam akun anda untuk dapat memesan di website ini
        </h4>
      </div>
      <CCard className='p-4'>
        <CForm className='pt-3 px-3'>
          <InputField
            secure={false}
            type='text'
            label='Username/Email'
            placeholder='Username/Email'
            onChange={setEmail}
            value={email}
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
            <CButton size='lg'>Masuk</CButton>

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
