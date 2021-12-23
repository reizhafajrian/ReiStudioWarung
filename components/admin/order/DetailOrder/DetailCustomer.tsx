import BadgePayment from '@components/order/BadgePayment'
import BadgeStatus from '@components/order/BadgeStatus'
import { CCol, CRow } from '@coreui/react'

const DetailCustomer = () => {
  return (
    <div className='bg-white p-4' style={{ borderRadius: 20 }}>
      <h5 className='lh-lg'>
        <b>Johnny Doe</b> | +62 81112345678
      </h5>
      <CRow>
        <CCol>
          <h5 className='lh-lg'>
            Jalan Lapangan Banteng no. 15, Pondok Labu, Cilandak, Jakarta
            Selatan
          </h5>
          <h5 className='lh-lg'>
            <b>Total harga</b>: Rp125.000,-
          </h5>
        </CCol>
        <CCol className='text-end'>
          <h5 className='lh-lg fw-bold'>Metode Pembayaran: </h5>
          <h5 className='lh-lg fw-bold'>Status: </h5>
        </CCol>
        <CCol>
          <div className='d-flex mb-2'>
            <BadgePayment title='Transfer Bank' />
          </div>
          <div className='d-flex'>
            <BadgeStatus title='sedang diproses' forAdmin={true} />
          </div>
        </CCol>
      </CRow>
    </div>
  )
}

export default DetailCustomer
