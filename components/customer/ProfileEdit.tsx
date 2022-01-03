import { useState } from 'react'
import { useRouter } from 'next/router'
import InputField from '../InputField'
import { CAvatar, CButton, CCard, CForm } from '@coreui/react'
import { useDispatch } from 'react-redux'
import { getUser } from '../../redux/actions/loggedActions'
import { Put } from '../../utils/axios'

const ProfileEdit = ({ user }: any) => {
  const router = useRouter()
  const dispatch = useDispatch()

  // const { user } = useSelector((state: RootStateOrAny) => state.user)
  // const id = user._id
  const [name, setName] = useState(user.name)
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  const [phone, setPhone] = useState(user.phone)
  const [address, setAddress] = useState(user.address)

  function getFirstWord(name: string) {
    return name?.charAt(0).toUpperCase()
  }
  const check =
    name.length > 0 &&
    username.length > 0 &&
    email.length > 0 &&
    phone.length > 0 &&
    address.length > 0

  const handlePost = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })
      Put(`/customer?id=${user._id}`, {
        name,
        username,
        email,
        phone,
        address,
      }).then((res) => {
        dispatch(getUser())
        router.push('/customer/profile')
        dispatch({
          type: 'LOADING',
          payload: false,
        })
      })
      dispatch({
        type: 'SETALERT',
        isVisible: true,
        color: 'success',
        message: 'Berhasil menperbarui profile',
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
    <div className='w-100 d-flex flex-column align-items-center mt-5 pt-4'>
      <div>
        <h2 className='fw-bold mb-5 text-center text-md-start'>Edit Profile</h2>
        <CCard className='p-5 mb-5 mx-3 mx-md-0'>
          <div className='text-center mb-4'>
            <CAvatar color='secondary' size='xl'>
              {getFirstWord(name)}
            </CAvatar>
          </div>
          <CForm>
            <div className='d-flex flex-wrap justify-content-between mb-4'>
              <div className='profile-form pe-md-3 me-md-4'>
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
              <div className='profile-form'>
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
              <CButton
                onClick={(e) => {
                  e.preventDefault()
                  handlePost()
                }}
                className='w-25'
                size='lg'
              >
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
