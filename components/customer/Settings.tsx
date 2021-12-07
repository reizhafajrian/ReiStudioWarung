import { useState } from 'react'
import Link from 'next/link'
import InputField from '../InputField'
import { CForm, CContainer, CCard, CButton } from '@coreui/react'
import Modal from '../Modal'

const Settings = () => {
  const [passwordLama, setPasswordLama] = useState('')
  const [passwordBaru, setPasswordBaru] = useState('')
  const [passwordKonf, setPasswordKonf] = useState('')
  const [visible, setVisible] = useState(false)

  return (
    <CContainer className='d-flex flex-column mt-5 px-0 pt-4'>
      <div>
        <h2 className='text-gray fw-bold mb-4'>Pengaturan</h2>
        <div className='row'>
          <div className='col-3'>
            <CCard className='col-4 p-4 w-100'>
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
                <CButton size='lg'>Ya</CButton>
              </div>
            </Modal>
            {/* Modal End */}
          </div>
          <div className='col-7 ms-5'>
            <CCard className='w-100 p-5 py-4 ms-5'>
              <CForm className='mt-2'>
                <InputField
                  secure={true}
                  type='password'
                  label='Password Lama'
                  placeholder='Password Lama'
                  onChange={setPasswordLama}
                  value={passwordLama}
                  id='pass'
                />
                <div className='w-100 d-flex justify-content-between'>
                  <InputField
                    secure={true}
                    type='password'
                    label='Password Baru'
                    placeholder='Password Baru'
                    onChange={setPasswordBaru}
                    value={passwordBaru}
                    id='pass'
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
