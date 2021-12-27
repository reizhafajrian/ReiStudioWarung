import { CFormInput, CFormTextarea } from '@coreui/react'

interface props {
  value: string
  onChange: (value: string) => void
  secure?: boolean
  placeholder?: string
  type?: string
  id?: string
  label?: string
}

const InputField = ({
  secure,
  onChange,
  value,
  type,
  placeholder,
  id,
  label,
}: props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }

  return (
    <div className='mb-3'>
      <label className='h6 fw-bold mb-3' htmlFor={id}>
        {label}
      </label>

      {type == 'textarea' ? (
        <CFormTextarea
          style={{ height: 154 }}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChangeTextArea(e)}
          id={id}
        ></CFormTextarea>
      ) : (
        <CFormInput
          type={type ? type : secure ? 'text' : 'password'}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChange(e)}
          id={id}
        />
      )}
    </div>
  )
}

export default InputField
