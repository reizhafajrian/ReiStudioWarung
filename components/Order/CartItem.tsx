import { CButton, CCol, CRow } from '@coreui/react'
import Image from 'next/image'
import { BiMinus, BiPlus } from 'react-icons/bi'

const CartItem = () => {
  return (
    <CRow className='mb-4'>
      <CCol className='d-flex align-items-center'>
        <div>
          <Image
            className='product-img__sm'
            src='https://picsum.photos/200'
            alt='product'
            width={80}
            height={80}
          />
        </div>
        <div className='ms-4'>
          <h4 className='fw-bold mb-3'>Telur Kiloan</h4>
          <h5>Rp. 250.000,-</h5>
        </div>
      </CCol>
      <CCol xs={3} className='d-flex align-items-center'>
        <div>
          <CButton
            color='primary'
            variant='outline'
            shape='rounded-circle'
            className='w-auto border-2'
          >
            <BiMinus />
          </CButton>
        </div>
        <h5 className='mx-3'>1</h5>
        <div>
          <CButton
            color='primary'
            variant='outline'
            shape='rounded-circle'
            className='w-auto border-2'
          >
            <BiPlus />
          </CButton>
        </div>
      </CCol>
      <CCol xs={3} className='text-end my-auto'>
        <h5>Rp. 250.000,-</h5>
      </CCol>
    </CRow>
  )
}

export default CartItem
