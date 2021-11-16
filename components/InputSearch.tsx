import { CButton, CForm, CFormInput } from '@coreui/react'
import { BiSearchAlt2 } from 'react-icons/bi'

interface props {
  value: string
  onChange: (value: string) => void
  placeholder: string
}

const InputSearch = ({ value, onChange, placeholder }: props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(value)
    onChange(e.target.value)
  }

  return (
    <CForm className='ms-1 d-flex' style={{ maxWidth: 360 }}>
      <CFormInput
        type='search'
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e)}
        style={{ borderRadius: '0.75rem 0 0 0.75rem' }}
      />
      <CButton
        className='px-3 bg-dark'
        style={{ borderRadius: '0 0.75rem 0.75rem 0' }}
      >
        <BiSearchAlt2 style={{ fill: '#ffffff', width: 24, height: 24 }} />
      </CButton>
    </CForm>
  )
}

export default InputSearch
