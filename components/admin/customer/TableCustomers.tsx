import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CButton,
  CPopover,
} from '@coreui/react'
import { FiSend } from 'react-icons/fi'

const TableCustomers = ({ customers, result, forDashboard = false }: any) => {
  const headers = [
    'Nama',
    'Username',
    'Email',
    'Telepon',
    'Alamat',
    'Kirim Voucher',
  ]

  return (
    <div className='mt-4'>
      <CTable borderless hover responsive>
        <CTableHead className='h6 bg-white'>
          <CTableRow>
            {headers.map((title, index) => (
              <CTableHeaderCell
                key={index}
                className='px-3 py-4 border-0 align-middle'
              >
                {title}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody className='h6 bg-white py-4 align-middle'>
          {!customers && (
            <CTableRow>
              <CTableDataCell>Daftar Pelanggan Kosong</CTableDataCell>
            </CTableRow>
          )}
          {forDashboard
            ? customers?.slice(0, 5).map((c: any) => (
                <CTableRow style={{ cursor: 'pointer' }} key={c._id}>
                  <CTableDataCell className='text-capitalize'>
                    {c.name}
                  </CTableDataCell>
                  <CTableDataCell>{c.username}</CTableDataCell>
                  <CTableDataCell>{c.email}</CTableDataCell>
                  <CTableDataCell>{c.phone}</CTableDataCell>
                  <CPopover content={c.address} placement='top' trigger='hover'>
                    <CTableDataCell>
                      <p
                        className='m-0 text-truncate'
                        style={{ maxWidth: 200 }}
                      >
                        {c.address}
                      </p>
                    </CTableDataCell>
                  </CPopover>
                  <CTableDataCell className='text-center'>
                    <CButton color='info'>
                      <FiSend color='white' size='24' />
                    </CButton>
                  </CTableDataCell>
                </CTableRow>
              ))
            : customers
                .slice(result <= 6 ? 0 : result - 6, customers.length)
                .map((c: any) => (
                  <CTableRow style={{ cursor: 'pointer' }} key={c._id}>
                    <CTableDataCell className='text-capitalize'>
                      {c.name}
                    </CTableDataCell>
                    <CTableDataCell>{c.username}</CTableDataCell>
                    <CTableDataCell>{c.email}</CTableDataCell>
                    <CTableDataCell>{c.phone}</CTableDataCell>
                    <CPopover
                      content={c.address}
                      placement='top'
                      trigger='hover'
                    >
                      <CTableDataCell>
                        <p
                          className='m-0 text-truncate'
                          style={{ maxWidth: 200 }}
                        >
                          {c.address}
                        </p>
                      </CTableDataCell>
                    </CPopover>
                    <CTableDataCell className='text-center'>
                      <CButton color='info'>
                        <FiSend color='white' size='24' />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableCustomers
