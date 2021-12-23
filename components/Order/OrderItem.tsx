import { CCol, CRow } from '@coreui/react'
import Image from 'next/image'

const OrderItem = () => {
  return (
    <CRow className='mb-4 px-md-3'>
      <CCol xs={12} md={5} className='p-0 d-flex align-items-center'>
        <div>
          <Image
            className='product-img__sm'
            src='https://picsum.photos/200'
            alt=''
            width={80}
            height={80}
          />
        </div>
        <div className='ms-4'>
          <h4 className='fw-bold mb-3'>Telur Kiloan</h4>
          <h5>Rp. 24.000,-</h5>
        </div>
      </CCol>
      <CCol xs={6} md={3} className='p-0 d-flex align-items-center'>
        <h5 className='m-0 mx-auto'>1</h5>
      </CCol>
      <CCol xs={6} md={3} className='p-0 text-end my-auto'>
        <h5 className='mb-0'>Rp. 24.000,-</h5>
      </CCol>
    </CRow>
  )
}

export default OrderItem
