import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/router'
import InputField from '../InputField'
import { CButton, CCard, CForm } from '@coreui/react'
import Header from './Header'

interface props {
  forAdmin?: boolean
}
const Register = ({ forAdmin = false }: props) => {
  const router = useRouter()

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const userData = {
      name,
      username,
      email,
      password,
      confirmPassword,
      phone,
      address,
    }

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      Credential: 'include',
      body: JSON.stringify(userData),
    }

    const registerReq = await fetch(
      forAdmin ? '/api/admin/register' : '/api/customer/register',
      config
    )

    // if (!registerReq.ok) return setStatus('error' + registerReq.status)

    // setStatus('success')

    return forAdmin
      ? router.push('/admin/login')
      : router.push('/customer/login')
  }

  return (
    <>
      <Header forAdmin={forAdmin} pageTitle='Register' />
      <div className='d-flex flex-column align-items-center mt-5'>
        <div className='text-gray text-center'>
          <h2 className='fw-bold lh-lg mb-0'>Registrasi akun anda!</h2>
          <h4 className='fw-normal lh-md-lg mb-3'>
            Registrasi sekarang untuk dapat memesan di website ini
          </h4>
        </div>
        <CCard className='px-4 py-4 mx-3 mb-3 mx-md-0'>
          <CForm onSubmit={handleSubmit} className='px-3 pt-3'>
            <div className='d-flex flex-wrap justify-content-between mb-4'>
              <div className='register-form pe-md-3 me-md-4'>
                <InputField
                  secure={false}
                  type='text'
                  label='Nama'
                  placeholder='Nama'
                  onChange={setName}
                  value={name}
                  id='name'
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
              <div className='register-form'>
                <InputField
                  secure={false}
                  type='text'
                  label='Nomor Telepon'
                  placeholder='Nomor Telepon'
                  onChange={setPhone}
                  value={phone}
                  id='phone'
                />
                <InputField
                  secure={false}
                  type='textarea'
                  label='Alamat'
                  placeholder='Alamat'
                  onChange={setAddress}
                  value={address}
                  id='address'
                />
                <InputField
                  secure={true}
                  type='password'
                  label='Konfirmasi Password'
                  placeholder='Konfirmasi Password'
                  onChange={setConfirmPassword}
                  value={confirmPassword}
                  id='confirmPassword'
                />
              </div>
            </div>
            <div className='d-flex align-items-center mb-3'>
              <CButton type='submit' className='me-4' size='lg'>
                Daftar
              </CButton>
              <p className='text-dark mb-0'>
                Sudah punya akun? &nbsp;
                <a
                  className='text-dark fw-bold'
                  href={forAdmin ? '/admin/login' : '/customer/login'}
                >
                  Masuk
                </a>
              </p>
            </div>
          </CForm>
        </CCard>
      </div>
    </>
  )
}

export default Register
