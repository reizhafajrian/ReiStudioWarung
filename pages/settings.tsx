import { ReactElement, useState } from 'react'
import Link from 'next/link'
import Card from '../components/Card'
import Button from '../components/Button'
import Layout from '../components/Layout'
import InputField from '../components/InputField'
import { CForm, CContainer } from '@coreui/react'
import Modal from '../components/Modal'

const Pengaturan = () => {
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
            <Card style='col-4 p-4 w-100'>
              <h5 className='text-light lh-lg mb-3'>Ubah password</h5>
              <h5 className='lh-lg mb-0'>
                <button
                  className='btn text-gray p-0'
                  onClick={() => setVisible(!visible)}
                >
                  <h5>Logout</h5>
                </button>
              </h5>
            </Card>
            {/* Modal Start*/}
            <Modal visible={visible} setVisible={setVisible}>
              <h3 className='fw-bold mb-5 text-center'>
                Apakah anda yakin ingin
                <br />
                keluar?
              </h3>
              <div className='d-flex justify-content-between px-4 pt-3'>
                <Button
                  title='Batal'
                  style='text-dark bg-white border-dark fw-bold py-3'
                  width='10rem'
                  borderRadius='12px'
                  onClick={() => setVisible(!visible)}
                />
                <Button
                  title='Ya'
                  style='text-white bg-dark fw-bold py-3'
                  width='10rem'
                  borderRadius='12px'
                  path='/'
                />
              </div>
            </Modal>
            {/* Modal End */}
          </div>
          <div className='col-7 ms-5'>
            <Card style='w-100 p-5 py-4 ms-5'>
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
                  <Button
                    title='Simpan'
                    style='text-white bg-dark fw-bold px-4 py-3'
                    borderRadius='12px'
                    path=''
                  />
                </div>
              </CForm>
            </Card>
          </div>
        </div>
      </div>
    </CContainer>
  )
}

export default Pengaturan

Pengaturan.getLayout = function getLayout(content: ReactElement) {
  return (
    <Layout isCustomer={true} footerOff={true}>
      {content}
    </Layout>
  )
}
