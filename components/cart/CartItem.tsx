import Image from 'next/image'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import {
  decrementItem,
  deleteItem,
  incrementItem,
} from '../../redux/actions/cartActions'
import { BiMinus, BiPlus } from 'react-icons/bi'
import { CCol, CRow } from '@coreui/react'
import { Post } from 'utils/axios'

const CartItem = ({ product }: any) => {
  const dispatch = useDispatch()
  const data = useSelector((state: RootStateOrAny) => state)

  const total = product.selling_price * product.quantity
  const handlePost = async (type: any) => {
    switch (type) {
      case 'add':
        dispatch(incrementItem(product))
        break
      case 'minus':
        if (product.quantity === 1) {
          dispatch(deleteItem(product))
        } else {
          dispatch(decrementItem(product))
        }
        break
      default:
        dispatch(incrementItem(product))
        break
    }
    Post('/customer/addtocart', {
      data: data.cart.cartItems,
    })
  }

  return (
    <CRow className='mb-4 px-md-3'>
      <CCol xs={12} md={6} className='p-0 d-flex align-items-center'>
        <div>
          <Image
            className='product-img__sm'
            src={product.image}
            alt={product.name}
            width={80}
            height={80}
            unoptimized
          />
        </div>
        <div className='ms-4'>
          <h4 className='fw-bold mb-3'>{product.name}</h4>
          <h5>Rp. {product.selling_price.toLocaleString('id-ID')},-</h5>
        </div>
      </CCol>
      <CCol xs={6} md={3} className='p-0 d-flex align-items-center'>
        <button className='btn' onClick={() => handlePost('minus')}>
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
          onClick={() => {
            handlePost('add')
          }}
        >
          <BiPlus
            size={20}
            fill='#ff9090'
            className='count-btn border border-2 border-dark rounded-circle'
          />
        </button>
      </CCol>
      <CCol xs={6} md={3} className='p-0 text-end my-auto'>
        <h5 className='mb-0'>Rp. {total.toLocaleString('id-ID')},-</h5>
      </CCol>
    </CRow>
  )
}

export default CartItem
