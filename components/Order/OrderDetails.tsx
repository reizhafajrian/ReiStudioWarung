import AlertStatus from './AlertStatus'
import { CCard, CCol, CContainer, CFormInput, CRow } from '@coreui/react'
import OrderItem from './OrderItem'
import { useState } from 'react'

const OrderDetails = ({ order, user }: any) => {
  return (
    <CContainer className='p-0 my-5'>
      <h3 className='fw-bold mb-5'>Detail Pesanan</h3>
      <CRow className='mx-3 mx-md-5'>
        <CCol xs={12} md={8} className='p-0 pe-md-5'>
          <AlertStatus status={order.status.title} />
          <CCard className='pt-4 px-5'>
            <OrderItem items={order.cart} />
          </CCard>
        </CCol>

        {/* Payment Details */}
        <CCol className='p-0 ps-md-4 mt-3 mt-md-0'>
          <CCard className='p-4'>
            <div className='mb-3'>
              <h5 className='fw-bold'>Alamat Pengiriman</h5>
              <CFormInput
                className='bg-white border-0 border-bottom border-2 rounded-0 ps-2 py-0'
                value={user.address}
                disabled
              />
            </div>
            <div className='mb-3'>
              <h5 className='fw-bold'>Voucher Belanja</h5>
              <CFormInput
                className='bg-white border-0 border-bottom border-2 rounded-0 ps-2 py-0'
                value={order.voucher && order.voucher.code}
                disabled
              />
            </div>
            <div>
              <h5 className='fw-bold'>Total harga</h5>
              {order.voucher && (
                <h5 className='text-gray m-0 text-decoration-line-through'>
                  Rp.
                  {(order.total + order.voucher.amount).toLocaleString('id-ID')}
                  ,-
                </h5>
              )}
              <h5 className={order.voucher && 'text-success m-0 mt-2'}>
                Rp.
                {order.total.toLocaleString('id-ID')}
                ,-
              </h5>
            </div>
          </CCard>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default OrderDetails
