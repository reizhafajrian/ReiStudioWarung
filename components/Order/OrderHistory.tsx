import Image from 'next/image'
import Link from 'next/link'
import BadgeStatus from './BadgeStatus'

const OrderHistory = ({ order }: any) => {
  return (
    <div
      className='mb-3 d-flex justify-content-between text-center'
      key={order.order_id}
    >
      <div className='d-flex'>
        <div>
          <Image
            className='product-img__sm'
            src={order.cart[0].image}
            alt={order.cart[0].name}
            width={80}
            height={80}
            unoptimized
          />
        </div>
        <div className='ms-3'>
          <p className='text-gray fw-bold mb-1'>
            {new Date(order.created_at).toLocaleDateString()}
          </p>
          <p className='mb-1'>{order.cart.length} barang</p>
          <p className='text-secondary'>
            <small>
              Rp.
              {order.total.toLocaleString('id-ID')}
              ,-
            </small>
          </p>
        </div>
      </div>
      <div>
        <Link href={`/customer/profile/detail-pesanan/${order.order_id}`}>
          <a className='text-dark fw-bold mb-3'>Lihat detail pesanan</a>
        </Link>
        <BadgeStatus title={order.status.title} />
      </div>
    </div>
  )
}

export default OrderHistory
