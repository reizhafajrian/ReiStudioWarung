import { ReactElement, useState } from 'react'
import Link from 'next/link'
import Card from '../components/Card'
import InputField from '../components/InputField'
import Layout from '../components/Layout'
import { CForm } from '@coreui/react'
import Button from '../components/Button'

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
      <Card style='px-5 pt-4 pb-5'>
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
            <Button
              title='Masuk'
              style='text-white bg-dark fw-bold mt-4 mb-4  px-4 py-3'
              borderRadius='12px'
              path='/admin'
            />
            <p className='text-dark mb-3'>
              Belum punya akun? &nbsp;
              <Link href='/signup'>
                <a className='text-dark fw-bold'>Daftar sekarang</a>
              </Link>
            </p>
          </div>
        </CForm>
      </Card>
    </>
  )
}

export default Login

Login.getLayout = function getLayout(content: ReactElement) {
  return <Layout>{content}</Layout>
}
