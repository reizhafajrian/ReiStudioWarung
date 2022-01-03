import { useState } from 'react'
import { useRouter } from 'next/router'
import InputField from '../InputField'
import { CButton, CCard, CForm } from '@coreui/react'
import Header from './Header'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { Post } from 'utils/axios'
import Alert from '@components/Alert'
import Loading from '@components/Loading'

interface props {
  forAdmin?: boolean
}
const Register = ({ forAdmin = false }: props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const state = useSelector((state: RootStateOrAny) => state)

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [address, setAddress] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const check =
    name.length > 0 &&
    username.length > 0 &&
    email.length > 0 &&
    password.length > 0 &&
    phone.length > 0 &&
    address.length > 0 &&
    confirmPassword.length > 0

  const handlePost = () => {
    const userData = {
      name,
      username,
      email,
      password,
      confirmPassword,
      phone,
      address,
    }
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })
      Post(forAdmin ? '/admin/register' : '/customer/register', userData).then(
        (res: any) => {
          dispatch({
            type: 'LOADING',
            payload: false,
          })
          if (res.status === 200) {
            dispatch({
              type: 'SETALERT',
              isVisible: true,
              color: 'success',
              message: 'Berhasil Mendaftarkan akun',
            })
            forAdmin
              ? router.push('/admin/login')
              : router.push('/customer/login')
          } else {
            dispatch({
              type: 'SETALERT',
              isVisible: true,
              color: 'danger',
              message: res.error,
            })
          }
        }
      )
    } else {
      dispatch({
        type: 'SETALERT',
        isVisible: true,
        color: 'danger',
        message: 'Harap Isi Semua Form',
      })
    }
  }

  return (
    <div className='min-vh-100 d-flex flex-column'>
      {state.loading === true && <Loading />}
      <Header forAdmin={forAdmin} pageTitle='Register' />
      <div className='d-flex flex-column align-items-center mt-5'>
        <div className='text-gray text-center'>
          <h2 className='fw-bold lh-lg mb-0'>
            Registrasi akun {forAdmin ? 'admin' : 'anda!'}
          </h2>
          {!forAdmin && (
            <h4 className='fw-normal lh-md-lg mb-3'>
              Registrasi sekarang untuk dapat memesan di website ini
            </h4>
          )}
        </div>
        <CCard className='px-4 py-4 mx-3 mb-3 mx-md-0'>
          <CForm className='px-3 pt-3'>
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
              <CButton
                onClick={(e) => {
                  e.preventDefault()
                  handlePost()
                }}
                className='me-4'
                size='lg'
              >
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
      {state.alert.isVisible === true && <Alert />}
    </div>
  )
}

export default Register
