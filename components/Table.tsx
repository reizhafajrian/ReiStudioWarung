import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { ReactNode } from 'react'

interface props {
  headers: string[]
  children: ReactNode
}

const Table = ({ headers, children }: props) => {
  return (
    <div className='mt-4'>
      <CTable hover>
        <CTableHead className='h5 bg-white'>
          <CTableRow>
            {headers.map((title, index) => (
              <CTableHeaderCell key={index} className='px-3 py-4 border-0'>
                {title}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <div className='mb-3'></div>
        <CTableBody className='h5 bg-white py-4 align-middle'>
          {children}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default Table
