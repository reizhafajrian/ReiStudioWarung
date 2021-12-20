import { useRouter } from 'next/router'
import { RootStateOrAny, useSelector } from 'react-redux'
import { IoBasket } from 'react-icons/io5'

const CartButton = () => {
  const router = useRouter()

  const { itemCount } = useSelector((state: RootStateOrAny) => state.cart)

  return (
    <button
      type='button'
      className='btn position-relative w-auto p-0 me-1'
      onClick={() => router.push('/customer/cart')}
    >
      <IoBasket fill='#ff9090' size='36px' />
      {itemCount !== 0 && (
        <span
          className='position-absolute start-100 translate-middle bg-white text-light border border-light rounded-circle'
          style={{ width: 25, height: 25, top: 8 }}
        >
          <span>{itemCount}</span>
        </span>
      )}
    </button>
  )
}

export default CartButton
