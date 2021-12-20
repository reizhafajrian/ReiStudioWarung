import { useState } from 'react'
import { useRouter } from 'next/router'
import cookie from 'js-cookie'
import InputField from '../InputField'
import Modal from '../Modal'
import { CForm, CContainer, CCard, CButton } from '@coreui/react'

const Settings = () => {
  const router = useRouter()
  const [passwordLama, setPasswordLama] = useState('')
  const [passwordBaru, setPasswordBaru] = useState('')
  const [passwordKonf, setPasswordKonf] = useState('')
  const [visible, setVisible] = useState(false)

  const logout = () => {
    cookie.remove('cart')
    cookie.remove('token')
    router.push('/customer/login')
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
                Apakah anda yakin ingin
                <br />
                keluar?
              </h3>
              <div className='d-flex justify-content-between px-4 pt-3'>
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
                <InputField
                  secure={true}
                  type='password'
                  label='Password Lama'
                  placeholder='Password Lama'
                  onChange={setPasswordLama}
                  value={passwordLama}
                  id='oldPass'
                />
                <div className='w-100 d-flex flex-wrap justify-content-between'>
                  <InputField
                    secure={true}
                    type='password'
                    label='Password Baru'
                    placeholder='Password Baru'
                    onChange={setPasswordBaru}
                    value={passwordBaru}
                    id='newPass'
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
                <div className='text-center mt-3 mb-2'>
                  <CButton size='lg'>Simpan</CButton>
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
