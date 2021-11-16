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
    console.log(value)
    onChange(e.target.value)
  }

  const handleChangeTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(value)
    onChange(e.target.value)
  }

  return (
    <div className='mb-3'>
      <label className='fs-5 fw-bold mb-3' htmlFor={id}>
        {label}
      </label>

      {type == 'textarea' ? (
        <CFormTextarea
          style={{ width: 300, height: 160 }}
          placeholder={placeholder}
          value={value}
          onChange={(e) => handleChangeTextArea(e)}
          id={id}
        ></CFormTextarea>
      ) : (
        <CFormInput
          style={{ width: 300 }}
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
