import { CButton, CCol, CRow } from '@coreui/react'
import Image from 'next/image'
import { BiMinus, BiPlus } from 'react-icons/bi'

const CartItem = () => {
  return (
    <CRow className='mb-4 px-3'>
      <CCol className='p-0 d-flex align-items-center'>
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
      <CCol xs={3} className='p-0 d-flex align-items-center'>
        <BiMinus
          size={20}
          fill='#ff9090'
          cursor='pointer'
          className='count-btn border border-2 border-dark rounded-circle'
        />
        <h5 className='m-0 mx-3'>1</h5>
        <BiPlus
          size={20}
          fill='#ff9090'
          cursor='pointer'
          className='count-btn border border-2 border-dark rounded-circle'
        />
      </CCol>
      <CCol xs={3} className='p-0 text-end my-auto'>
        <h5>Rp. 250.000,-</h5>
      </CCol>
    </CRow>
  )
}

export default CartItem
