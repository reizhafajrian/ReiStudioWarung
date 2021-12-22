import { CFormInput } from '@coreui/react'
import { BiMinus } from 'react-icons/bi'

const FilterReport = () => {
  const dateNow = new Date().toISOString().substring(0, 10)
  return (
    <div className='date-picker d-flex align-items-center'>
      <CFormInput type='date' defaultValue={dateNow} />
      <div className='mx-auto mx-md-3'>
        <BiMinus size={24} />
      </div>
      <CFormInput type='date' defaultValue={dateNow} />
    </div>
  )
}

export default FilterReport
