import { CCol, CRow } from '@coreui/react'
import Image from 'next/image'

const OrderItem = ({ items }: any) => {
  return (
    <>
      {items.map((item: any) => (
        <CRow key={item._id} className='mb-4 px-md-3'>
          <CCol xs={12} md={5} className='p-0 d-flex align-items-center'>
            <div>
              <Image
                className='product-img__sm'
                src={item.image}
                alt={item.name}
                width={80}
                height={80}
              />
            </div>
            <div className='ms-4'>
              <h4 className='fw-bold mb-3'>{item.name}</h4>
              <h5>Rp.{item.selling_price},-</h5>
            </div>
          </CCol>
          <CCol xs={6} md={3} className='p-0 d-flex align-items-center'>
            <h5 className='m-0 mx-auto'>{item.quantity}</h5>
          </CCol>
          <CCol xs={6} md={3} className='p-0 text-end my-auto'>
            <h5 className='mb-0'>Rp.{item.selling_price * item.quantity},-</h5>
          </CCol>
        </CRow>
      ))}
    </>
  )
}

export default OrderItem
