import { RootStateOrAny, useSelector } from 'react-redux'
import CartItem from './CartItem'
import { CCard } from '@coreui/react'

const CartProducts = () => {
  const { cartItems } = useSelector((state: RootStateOrAny) => state.cart)

  return (
    <CCard className='pt-4 px-5'>
      {cartItems.map((item: any) => (
        <CartItem key={item._id} product={item} />
      ))}
    </CCard>
  )
}

export default CartProducts
