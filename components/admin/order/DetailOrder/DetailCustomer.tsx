import BadgePayment from '@components/order/BadgePayment'
import BadgeStatus from '@components/order/BadgeStatus'
import { CCol, CRow } from '@coreui/react'

const DetailCustomer = ({ user, order }: any) => {
  return (
    <div className='bg-white p-4' style={{ borderRadius: 20 }}>
      <h5 className='lh-lg'>
        <b>{user.name}</b> | {user.phone}
      </h5>
      <CRow>
        <CCol>
          <h5 className='lh-lg'>{user.address}</h5>
          <h5 className='lh-lg'>
            <b>Total harga</b>: Rp.
            {order.total.toLocaleString('id-ID')}
            ,-
          </h5>
        </CCol>
        <CCol className='text-end'>
          <h5 className='lh-lg fw-bold'>Metode Pembayaran: </h5>
          <h5 className='lh-lg fw-bold'>Status: </h5>
        </CCol>
        <CCol>
          <div className='d-flex mb-2'>
            <BadgePayment title={order.payment} />
          </div>
          <div className='d-flex'>
            <BadgeStatus title={order.status.title} forAdmin={true} />
          </div>
        </CCol>
      </CRow>
    </div>
  )
}

export default DetailCustomer
