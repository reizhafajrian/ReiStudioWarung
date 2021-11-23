import { ReactElement, useState } from 'react'
import Link from 'next/link'
import Button from '../components/Button'
import Card from '../components/Card'
import InputField from '../components/InputField'
import Layout from '../components/Layout'
import { CForm } from '@coreui/react'

const Signup = () => {
  const [nama, setNama] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState('')
  const [passwordKonf, setPasswordKonf] = useState('')

  return (
    <>
      <div className='text-gray text-center'>
        <h2 className='fw-bold lh-lg mb-0'>Registrasi akun anda!</h2>
        <h4 className='fw-normal lh-lg  mb-3'>
          Registrasi sekarang untuk dapat memesan di website ini
        </h4>
      </div>
      <Card style='px-5 py-4'>
        <CForm className='px-3 pt-3'>
          <div className='d-flex justify-content-between mb-4'>
            <div className='pe-3 me-4'>
              <InputField
                secure={false}
                type='text'
                label='Nama'
                placeholder='Nama'
                onChange={setNama}
                value={nama}
                id='nama'
              />
              <InputField
                secure={false}
                type='text'
                label='Username'
                placeholder='Username'
                onChange={setUsername}
                value={username}
                id='username'
              />
              <InputField
                secure={false}
                type='email'
                label='Email'
                placeholder='Email'
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
            </div>
            <div>
              <InputField
                secure={false}
                type='text'
                label='Nomor Telepon'
                placeholder='Nomor Telepon'
                onChange={setNoTelp}
                value={noTelp}
                id='notelp'
              />
              <InputField
                secure={false}
                type='textarea'
                label='Alamat'
                placeholder='Alamat'
                onChange={setAlamat}
                value={alamat}
                id='alamat'
              />
              <InputField
                secure={true}
                type='password'
                label='Konfirmasi Password'
                placeholder='Konfirmasi Password'
                onChange={setPasswordKonf}
                value={passwordKonf}
                id='passkonf'
              />
            </div>
          </div>
          <div className='d-flex align-items-center mb-3'>
            <Button
              title='Daftar'
              style='text-white bg-dark fw-bold me-4  px-4 py-3'
              borderRadius='12px'
              path='/profile'
            />
            <p className='text-dark mb-0'>
              Sudah punya akun? &nbsp;
              <Link href='/login'>
                <a className='text-dark fw-bold'>Masuk</a>
              </Link>
            </p>
          </div>
        </CForm>
      </Card>
    </>
  )
}

export default Signup

Signup.getLayout = function getLayout(content: ReactElement) {
  return <Layout>{content}</Layout>
}
