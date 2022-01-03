import { useState } from 'react'
import Cookie from 'js-cookie'
import { useRouter } from 'next/router'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/actions/loggedActions'
import InputField from '../InputField'
import { CButton, CCard, CForm } from '@coreui/react'
import Header from './Header'
import { Post } from 'utils/axios'
import Alert from '@components/Alert'
import Loading from '@components/Loading'

interface props {
  forAdmin?: boolean
}

const Login = ({ forAdmin = false }: props) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const state = useSelector((state: RootStateOrAny) => state)
  const [emailOrUsername, setEmailOrUsername] = useState('')
  const [password, setPassword] = useState('')

  const check = emailOrUsername.length > 0 && password.length > 0

  const handlePost = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })
      Post(forAdmin ? '/admin/login' : '/customer/login', {
        emailOrUsername,
        password,
      }).then((res: any) => {
        dispatch({
          type: 'LOADING',
          payload: false,
        })
        console.log(res)

        if (res.status === 200) {
          Cookie.set('token', res.token)
          dispatch(getUser())
          forAdmin ? router.push('/admin') : router.push('/customer')
        } else {
          dispatch({
            type: 'SETALERT',
            isVisible: true,
            color: 'danger',
            message: res.error,
          })
        }
      })
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
      <Header forAdmin={forAdmin} pageTitle='Login' />
      <div className='d-flex flex-column align-items-center mt-5'>
        <div className='text-gray text-center mx-5 mx-md-0'>
          <h2 className='fw-bold lh-lg mb-0'>
            Masuk{forAdmin && ' Sebagai Admin'}
          </h2>
          {!forAdmin && (
            <h4 className='fw-normal lh-md-lg mb-4 mb-md-5'>
              Masuk ke dalam akun anda untuk dapat memesan di website ini
            </h4>
          )}
        </div>
        <CCard className='p-4'>
          <CForm className='pt-3 px-3'>
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
              <CButton
                size='lg'
                onClick={(e) => {
                  e.preventDefault()
                  handlePost()
                }}
              >
                Masuk
              </CButton>
              <p className='text-dark m-0 mt-3'>
                Belum punya akun? &nbsp;
                <a
                  className='text-dark fw-bold'
                  href={forAdmin ? '/admin/register' : '/customer/register'}
                >
                  Daftar sekarang
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

export default Login
