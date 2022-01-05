import Image from 'next/image'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { addToCart, incrementItem } from '../../redux/actions/cartActions'
import cookie from 'js-cookie'
import { CCard, CCardBody, CButton } from '@coreui/react'
import { useRouter } from 'next/router'
import { Post } from 'utils/axios'

const ProductItem = ({ product }: any) => {
  const router = useRouter()
  const dispatch = useDispatch()
  const token = cookie.get('token')
  const { cartItems } = useSelector((state: RootStateOrAny) => state.cart)

  const isInCart = (product: any) => {
    return !!cartItems.find((item: any) => item._id === product._id)
  }

  const handleAddtoCart = () => {
    const { renting_price, selling_price, ...buyProduct } = product
    buyProduct._id = buyProduct._id + '0'
    buyProduct.type = 'buy'
    buyProduct.price = selling_price

    if (token) {
      if (isInCart(buyProduct)) {
        dispatch(incrementItem(buyProduct))
      } else {
        dispatch(addToCart(buyProduct))
      }
      Post('/customer/addtocart', {
        data: cartItems,
      }).then((res: any) => {
        dispatch({
          type: 'SETALERT',
          isVisible: true,
          color: 'success',
          message: 'item added successfully',
        })
      })
    } else {
      router.push('/customer/login')
    }
  }

  const handleSewa = () => {
    const { selling_price, renting_price, ...rentProduct } = product
    rentProduct._id = rentProduct._id + '1'
    rentProduct.type = 'rent'
    rentProduct.price = renting_price

    if (token) {
      if (isInCart(rentProduct)) {
        dispatch(incrementItem(rentProduct))
      } else {
        dispatch(addToCart(rentProduct))
      }

      Post('/customer/addtocart', {
        data: cartItems,
      }).then((res: any) => {
        dispatch({
          type: 'SETALERT',
          isVisible: true,
          color: 'success',
          message: 'item added successfully',
        })
        console.log(res)
      })
    } else {
      router.push('/customer/login')
    }
  }
  return (
    <CCard style={{ minWidth: 200 }} className='mb-4 mx-2 mx-lg-0'>
      <Image
        className='product-img'
        src={product.image}
        alt={product.name}
        width={200}
        height={200}
        objectFit='contain'
        unoptimized
      />
      <CCardBody>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='fw-bold mb-2'>{product.name}</p>
          {product.category === 'Tabung Gas' && (
            <CButton
              variant='outline'
              className='p-0 py-1'
              onClick={(e) => {
                e.preventDefault()
                handleSewa()
              }}
            >
              Sewa
            </CButton>
          )}
        </div>
        <div className='d-flex align-items-center'>
          <div className='flex-grow-1'>
            <p className='mb-1 fw-medium'>
              <small>
                Rp.
                {product.selling_price.toLocaleString('id-ID')}
                ,-
              </small>
            </p>
            <p className='text-secondary mb-0'>
              <small>
                {product.category === 'Tabung Gas' ? 'Dibeli/sewa' : 'Dibeli'}
                <span className='text-primary'> {product.sold} </span>
                kali
              </small>
            </p>
          </div>
          <CButton
            onClick={(e) => {
              e.preventDefault()
              handleAddtoCart()
            }}
          >
            Beli
          </CButton>
        </div>
      </CCardBody>
    </CCard>
  )
}

export default ProductItem
