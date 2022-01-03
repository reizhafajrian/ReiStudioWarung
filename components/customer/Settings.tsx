import { useState } from 'react'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import InputField from '../InputField'
import Modal from '../Modal'
import { CForm, CContainer, CCard, CButton, CRow, CCol } from '@coreui/react'
import { useDispatch } from 'react-redux'
import { Put } from 'utils/axios'

const Settings = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const [password, setPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confPassword, setConfPassword] = useState('')
  const [visible, setVisible] = useState(false)

  const logout = () => {
    dispatch({
      type: 'LOADING',
      payload: true,
    })
    cookie.remove('cart')
    cookie.remove('token')
    router.push('/customer/login')
    dispatch({
      type: 'LOADING',
      payload: false,
    })
  }

  const check =
    password.length > 0 && newPassword.length > 0 && confPassword.length > 0

  const handlePost = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })
      Put(`/customer/changepass`, {
        password,
        newPassword,
        confPassword,
      }).then((res) => {
        dispatch({
          type: 'LOADING',
          payload: false,
        })

        if (res.status === 200) {
          dispatch({
            type: 'SETALERT',
            isVisible: true,
            color: 'success',
            message: 'Berhasil mengubah password',
          })
          setPassword('')
          setNewPassword('')
          setConfPassword('')
        } else {
          dispatch({
            type: 'SETALERT',
            isVisible: true,
            color: 'danger',
            message: 'Invalid password',
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
    <CContainer className='d-flex flex-column mt-5 px-0 pt-4'>
      <div>
        <h2 className='text-gray fw-bold mb-4 text-center text-md-start'>
          Pengaturan
        </h2>
        <div className='row m-0'>
          <div className='col-md-3'>
            <CCard className='p-4 w-100'>
              <h5 className='text-light lh-lg mb-3'>Ubah password</h5>
              <h5 className='lh-lg mb-0'>
                <a
                  className='btn w-100 text-start p-0'
                  onClick={() => setVisible(!visible)}
                >
                  <h5>Logout</h5>
                </a>
              </h5>
            </CCard>
            {/* Modal Start*/}
            <Modal visible={visible} setVisible={setVisible}>
              <h3 className='fw-bold mb-5 text-center'>
                Apakah anda yakin ingin{' '}
                <span className='d-md-block'>keluar?</span>
              </h3>
              <div className='d-flex justify-content-between px-md-4 pt-3'>
                <CButton
                  size='lg'
                  variant='outline'
                  onClick={() => setVisible(!visible)}
                >
                  Batal
                </CButton>
                <CButton size='lg' onClick={logout}>
                  Ya
                </CButton>
              </div>
            </Modal>
            {/* Modal End */}
          </div>
          <div className='col-md-8 my-3 my-md-0 mx-auto'>
            <CCard className='w-100 p-5 py-4 '>
              <CForm className='mt-2'>
                <CRow>
                  <CCol md={6} className='px-md-4'>
                    <InputField
                      secure={true}
                      type='password'
                      label='Password Lama'
                      placeholder='Password Lama'
                      onChange={setPassword}
                      value={password}
                      id='oldPass'
                    />
                  </CCol>
                </CRow>
                <CRow>
                  <CCol xs={12} md={6} className='px-md-4'>
                    <InputField
                      secure={true}
                      type='password'
                      label='Password Baru'
                      placeholder='Password Baru'
                      onChange={setNewPassword}
                      value={newPassword}
                      id='newPass'
                    />
                  </CCol>
                  <CCol className='px-md-4'>
                    <InputField
                      secure={true}
                      type='password'
                      label='Konfirmasi Password'
                      placeholder='Konfirmasi Password'
                      onChange={setConfPassword}
                      value={confPassword}
                      id='passkonf'
                    />
                  </CCol>
                </CRow>
                <div className='text-center mt-3 mb-2'>
                  <CButton
                    size='lg'
                    onClick={(e) => {
                      e.preventDefault()
                      handlePost()
                    }}
                  >
                    Simpan
                  </CButton>
                </div>
              </CForm>
            </CCard>
          </div>
        </div>
      </div>
    </CContainer>
  )
}

export default Settings
