import Image from 'next/image'
import { useDispatch } from 'react-redux'
import {
  decrementItem,
  deleteItem,
  incrementItem,
} from '../../redux/actions/cartActions'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { CCol, CRow } from '@coreui/react'

const CartItem = ({ product }: any) => {
  const dispatch = useDispatch()

  const total = product.selling_price * product.quantity

  return (
    <CRow className='mb-4 px-3'>
      <CCol className='p-0 d-flex align-items-center'>
        <div>
          <Image
            className='product-img__sm'
            src={product.image}
            alt={product.name}
            width={80}
            height={80}
          />
        </div>
        <div className='ms-4'>
          <h4 className='fw-bold mb-3'>{product.name}</h4>
          <h5>Rp. {product.selling_price.toLocaleString('id-ID')},-</h5>
        </div>
      </CCol>
      <CCol xs={3} className='p-0 d-flex align-items-center'>
        <button
          className='btn'
          onClick={
            product.quantity === 1
              ? () => dispatch(deleteItem(product))
              : () => dispatch(decrementItem(product))
          }
        >
          <BiMinus
            size={20}
            fill='#ff9090'
            className='count-btn border border-2 border-dark rounded-circle'
          />
        </button>
        <h5 className='m-0 mx-3'>{product.quantity}</h5>
        <button
          className='btn'
          disabled={product.quantity === product.stock ? true : false}
          onClick={() => dispatch(incrementItem(product))}
        >
          <BiPlus
            size={20}
            fill='#ff9090'
            className='count-btn border border-2 border-dark rounded-circle'
          />
        </button>
      </CCol>
      <CCol xs={3} className='p-0 text-end my-auto'>
        <h5>Rp. {total.toLocaleString('id-ID')},-</h5>
      </CCol>
    </CRow>
  )
}

export default CartItem
