import { useRouter } from 'next/router'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CButton,
} from '@coreui/react'
import { IoMdTrash } from 'react-icons/io'
import { RiPencilFill } from 'react-icons/ri'

const TableVouchers = () => {
  const router = useRouter()
  const vouchers = [
    {
      kode: 'KODE10K',
      discount: 'Rp.10.000,-',
      status: '24/07/21',
    },
  ]

  const headers = ['Kode Voucher', 'Jumlah Potongan', 'Status', 'Aksi']

  return (
    <div className='mt-4'>
      <CTable borderless hover>
        <CTableHead className='h6 bg-white'>
          <CTableRow>
            {headers.map((title, index) => (
              <CTableHeaderCell key={index} className='px-3 py-4 border-0'>
                {title}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <div className='mb-3'></div>
        <CTableBody className='h6 bg-white py-4 align-middle'>
          {vouchers.map((voucher) => (
            <CTableRow key={voucher.kode}>
              <CTableDataCell>{voucher.kode}</CTableDataCell>
              <CTableDataCell>{voucher.discount}</CTableDataCell>
              <CTableDataCell>{voucher.status}</CTableDataCell>
              <CTableDataCell>
                <CButton
                  color='warning'
                  className='w-auto me-2'
                  onClick={() => {
                    router.push(`/admin/vouchers/${voucher.kode}`)
                  }}
                >
                  <RiPencilFill fill='white' size='24' />
                </CButton>
                <CButton className='w-auto' color='danger'>
                  <IoMdTrash fill='white' size='24' />
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableVouchers
