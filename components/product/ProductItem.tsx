import Image from 'next/image'
import { CCard, CCardBody, CButton } from '@coreui/react'

interface props {
  image: string
  name: string
  price: number
  sold: number
}

const ProductItem = ({ image, name, price, sold }: props) => {
  return (
    <CCard style={{ maxWidth: 200 }} className='mb-4'>
      <Image
        className='product-img'
        src={image}
        alt={name}
        width={200}
        height={200}
        objectFit='contain'
      />
      <CCardBody>
        <p className='fw-bold mb-2'>{name}</p>
        <div className='d-flex align-items-center'>
          <div className='flex-grow-1'>
            <p className='mb-1 fw-medium'>
              <small>Rp. {price.toLocaleString('id-ID')},-</small>
            </p>
            <p className='text-secondary mb-0'>
              <small>
                Dibeli <span className='text-primary'> {sold} </span>kali
              </small>
            </p>
          </div>
          <CButton>Beli</CButton>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default ProductItem
