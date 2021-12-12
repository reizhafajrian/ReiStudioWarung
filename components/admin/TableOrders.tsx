import { useRouter } from 'next/router'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

const TableOrders = () => {
  const router = useRouter()
  const history = [
    {
      id: '1234',
      name: 'Johnny Doe',
      address: 'Jalan Lapangan Banteng no. 15...',
      total: 'Rp. 125.000,-',
      paymentMehod: 'Transfer Bank',
      status: 'selesai',
    },
  ]

  const headers = [
    'Nama',
    'Alamat',
    'Total Harga',
    'Metode Pembayaran',
    'Status',
  ]

  return (
    <div className='mt-4'>
      <CTable borderless hover>
        <CTableHead className='h6 bg-white'>
          <CTableRow>
            {headers.map((title, index) => (
              <CTableHeaderCell key={index} className='px-3 py-4 border-0 '>
                {title}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody className='h6 bg-white py-4 align-middle'>
          {history.map((order) => (
            <CTableRow
              key={order.id}
              onClick={() => {
                router.push(`/admin/history/${order.id}`)
              }}
            >
              <CTableDataCell>{order.name}</CTableDataCell>
              <CTableDataCell>{order.address}</CTableDataCell>
              <CTableDataCell>{order.total}</CTableDataCell>
              <CTableDataCell>{order.paymentMehod}</CTableDataCell>
              <CTableDataCell>{order.status}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableOrders
