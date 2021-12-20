import { SyntheticEvent, useState } from 'react'
import { useRouter } from 'next/router'
import InputField from '../InputField'
import { CAvatar, CButton, CCard, CForm } from '@coreui/react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getUser } from 'redux/actions/loggedActions'

const ProfileEdit = () => {
  const router = useRouter()
  const dispatch = useDispatch()

  const { user } = useSelector((state: RootStateOrAny) => state.user)
  const id = user._id
  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [address, setAddress] = useState(user.address)

  function getFirstWord(name: string) {
    return name?.charAt(0).toUpperCase()
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const updateData = {
      id,
      name,
      username,
      email,
      phone,
      address,
    }

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      Credential: 'include',
      body: JSON.stringify(updateData),
    }

    const updateReq = await fetch('/api/customer/update', config)

    const updateRes = await updateReq.json()

    if (updateRes) {
      dispatch(getUser())
      return router.push('/customer/profile')
    }
    return console.log(updateRes.message)
  }

  return (
    <div className='d-flex flex-column align-items-center mt-5 pt-4'>
      <div>
        <h2 className='fw-bold mb-5'>Edit Profile</h2>
        <CCard className='p-5 mb-5'>
          <div className='text-center mb-4'>
            <CAvatar color='secondary' size='xl'>
              {getFirstWord(name)}
            </CAvatar>
          </div>
          <CForm onSubmit={handleSubmit}>
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
                  label='Name'
                  placeholder='Name'
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
              </div>
              <div>
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
                  label='address'
                  placeholder='address'
                  onChange={setAddress}
                  value={address}
                  id='address'
                />
              </div>
            </div>
            <div className='text-center'>
              <CButton type='submit' className='w-25' size='lg'>
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
