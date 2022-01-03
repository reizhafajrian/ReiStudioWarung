import { CFormInput } from '@coreui/react'
import { useRouter } from 'next/router'
import { BaseSyntheticEvent } from 'react'
import { BiMinus } from 'react-icons/bi'
import filterSearch from 'utils/filterSearch'

const FilterReport = () => {
  const router = useRouter()

  const handleDateStart = (e: BaseSyntheticEvent) => {
    filterSearch({ router, s: new Date(e.target.value).valueOf().toString() })
  }

  const handleDateEnd = (e: BaseSyntheticEvent) => {
    filterSearch({ router, e: new Date(e.target.value).valueOf().toString() })
  }

  return (
    <div className='date-picker d-flex align-items-center'>
      <CFormInput type='date' onChange={handleDateStart} />
      <div className='mx-auto mx-md-3'>
        <BiMinus size={24} />
      </div>
      <CFormInput type='date' onChange={handleDateEnd} />
    </div>
  )
}

export default FilterReport
