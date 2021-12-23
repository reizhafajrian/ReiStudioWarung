import Image from 'next/image'
import Link from 'next/link'
import BadgePayment from './BadgePayment'
import BadgeStatus from './BadgeStatus'

const OrderHistory = () => {
  return (
    <div className='mb-3 d-flex justify-content-between text-center'>
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
        <div className='ms-3'>
          <p className='text-gray fw-bold mb-1'>24/07/21</p>
          <p className='mb-1'>10 barang</p>
          <p className='text-secondary'>
            <small>Rp250.000</small>
          </p>
        </div>
      </div>
      <div>
        <Link href='/customer/profile/detail-pesanan/1234'>
          <a className='text-dark fw-bold mb-3'>Lihat detail pesanan</a>
        </Link>
        <BadgeStatus title='selesai' />
      </div>
    </div>
  )
}

export default OrderHistory
