import { useState } from 'react'
import Image from 'next/image'
import InputField from '../InputField'
import { CButton, CCard, CForm } from '@coreui/react'

const ProfileEdit = () => {
  const [nama, setNama] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [noTelp, setNoTelp] = useState('')
  const [alamat, setAlamat] = useState('')

  return (
    <div className='d-flex flex-column align-items-center mt-5 pt-4'>
      <div>
        <h2 className='fw-bold mb-5'>Edit Profile</h2>
        <CCard className='p-5 mb-5'>
          <div className='text-center mb-4'>
            <Image
              src='/images/logo.jpg'
              alt='profile'
              height={80}
              width={80}
            />
          </div>
          <CForm>
            <div className='d-flex justify-content-between mb-4'>
              <div className='pe-3 me-4'>
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
              </div>
            </div>
            <div className='text-center'>
              <CButton className='w-25' size='lg'>
                Simpan
              </CButton>
            </div>
          </CForm>
        </CCard>
      </div>
    </div>
  )
}

export default ProfileEdit
