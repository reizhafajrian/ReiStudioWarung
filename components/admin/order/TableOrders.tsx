import { useRouter } from 'next/router'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CPopover,
} from '@coreui/react'
import BadgePayment from '@components/order/BadgePayment'
import BadgeStatus from '@components/order/BadgeStatus'

const TableOrders = ({ orders, result }: any) => {
  const router = useRouter()

  const headers = [
    'Nama',
    'Alamat',
    'Total Harga',
    'Tanggal Order',
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
          {orders
            ?.slice(result <= 6 ? 0 : result - 6, orders.length)
            .map((o: any) => (
              <CTableRow
                style={{ cursor: 'pointer' }}
                key={o.order_detail.order_id}
                onClick={() => {
                  router.push(`/admin/history/${o.order_detail.order_id}`)
                }}
              >
                <CTableDataCell className='text-capitalize'>
                  {o.name}
                </CTableDataCell>
                <CPopover content={o.address} placement='top' trigger='hover'>
                  <CTableDataCell>
                    <p className='m-0 text-truncate' style={{ maxWidth: 200 }}>
                      {o.address}
                    </p>
                  </CTableDataCell>
                </CPopover>
                <CTableDataCell>
                  Rp.
                  {o.order_detail.total.toLocaleString('id-ID')}
                  ,-
                </CTableDataCell>
                <CTableDataCell>
                  {new Date(o.order_detail.created_at).toLocaleDateString(
                    'id-ID',
                    {
                      year: 'numeric',
                      month: '2-digit',
                      day: '2-digit',
                    }
                  )}
                </CTableDataCell>
                <CTableDataCell>
                  <div className='d-flex'>
                    <BadgePayment title={o.order_detail.payment} />
                  </div>
                </CTableDataCell>
                <CTableDataCell>
                  <div className='d-flex'>
                    <BadgeStatus title={o.order_detail.status.title} />
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
