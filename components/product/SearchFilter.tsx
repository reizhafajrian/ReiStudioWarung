import { CButton, CForm, CFormInput } from '@coreui/react'
import { useRouter } from 'next/router'
import { BaseSyntheticEvent, useState } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import filterSearch from 'utils/filterSearch'

const SearchFilter = ({ placeholder }: any) => {
  const [search, setSearch] = useState('')

  const router = useRouter()

  const handleSearch = (e: BaseSyntheticEvent) => {
    e.preventDefault()
    filterSearch({ router, search: search ? search.toLowerCase() : 'all' })
  }

  return (
    <CForm onSubmit={handleSearch} className='d-flex'>
      <CFormInput
        className='w-75 rounded-0 rounded-start p-0 ps-2'
        type='text'
        placeholder={placeholder}
        value={search}
        name='search'
        onChange={(e) => setSearch(e.target.value)}
      />
      <CButton type='submit' className='rounded-0 rounded-end'>
        <BiSearchAlt2 size={24} />
      </CButton>
    </CForm>
  )
}

export default SearchFilter
