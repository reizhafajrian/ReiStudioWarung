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
      <CTable borderless hover responsive>
        <CTableHead className='h6'>
          <CTableRow>
            {headers.map((title, index) => (
              <CTableHeaderCell
                key={index}
                className='px-3 py-4 border-0 bg-white align-middle'
              >
                {title}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody className='bg-white h6 align-middle'>
          {vouchers.map((voucher) => (
            <CTableRow key={voucher.kode}>
              <CTableDataCell>{voucher.kode}</CTableDataCell>
              <CTableDataCell>{voucher.discount}</CTableDataCell>
              <CTableDataCell>{voucher.status}</CTableDataCell>
              <CTableDataCell className='d-flex'>
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
