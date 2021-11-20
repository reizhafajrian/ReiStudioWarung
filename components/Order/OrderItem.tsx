import { CButton } from '@coreui/react'
import Image from 'next/image'
import { BiMinus, BiPlus } from 'react-icons/bi'

const OrderItem = () => {
  return (
    <div className='mb-4 d-flex align-items-center justify-content-between'>
      <div className='d-flex'>
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
      </div>
      <div className='d-flex'>
        <div>
          <CButton
            color='primary'
            variant='outline'
            shape='rounded-circle'
            className='p-1 d-flex align-items-center border-2'
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
            className='p-1 d-flex align-items-center border-2'
          >
            <BiPlus />
          </CButton>
        </div>
      </div>
      <h5>Rp. 250.000,-</h5>
    </div>
  )
}

export default OrderItem
