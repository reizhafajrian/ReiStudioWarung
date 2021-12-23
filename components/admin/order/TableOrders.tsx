import { useRouter } from 'next/router'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'
import BadgePayment from '@components/order/BadgePayment'
import BadgeStatus from '@components/order/BadgeStatus'

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
          {history.map((order) => (
            <CTableRow
              style={{ cursor: 'pointer' }}
              key={order.id}
              onClick={() => {
                router.push(`/admin/history/${order.id}`)
              }}
            >
              <CTableDataCell>{order.name}</CTableDataCell>
              <CTableDataCell>{order.address}</CTableDataCell>
              <CTableDataCell>{order.total}</CTableDataCell>
              <CTableDataCell>
                <div className='d-flex'>
                  <BadgePayment title={order.paymentMehod} />
                </div>
              </CTableDataCell>
              <CTableDataCell>
                <div className='d-flex'>
                  <BadgeStatus title={order.status} />
                </div>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableOrders
