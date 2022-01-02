import * as React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import Script from 'next/script'
import { CButton, CForm, CFormInput } from '@coreui/react'
import { Get, Post } from 'utils/axios'
import { deleteAllItem } from 'redux/actions/cartActions'
import cookie from 'js-cookie'
import { useRouter } from 'next/router'

declare global {
  interface Window {
    snap: any
  }
}

const OrderDetails = () => {
  const token = cookie.get('token')
  const dispatch = useDispatch()
  const router = useRouter()

  const { cart, user } = useSelector((state: RootStateOrAny) => state)
  const [total, setTotal] = React.useState(cart.total)
  const [voucher, setVoucher] = React.useState({})
  const [isDiscount, setIsDiscount] = React.useState(false)

  console.log(isDiscount)

  const handleVoucher = (e: React.ChangeEvent<HTMLInputElement>) => {
    Get(`/vouchers?code=${e.target.value}`, token).then((res: any) => {
      if (res.voucher.length > 0) {
        setTotal(cart.total - res.voucher[0].amount)
        setIsDiscount(true)
        setVoucher(res.voucher[0])
      } else {
        setIsDiscount(false)
      }
    })
  }

  const handlePost = async () => {
    const post: any = await Post('/customer/pay', {
      price: total,
      email: user.user.email,
      first_name: user.user.name,
      last_name: user.user.name,
      phone: user.user.phone,
    })
    // alert("s")
    // window.location.href = post.transaction.redirect_url;

    window.snap.pay(post.transaction.token, {
<<<<<<< HEAD
      onSuccess: async (result: any) => {
        console.log(result, 'result')
      },
      onPending: async (result: any) => {
        Get(`/customer/pay?id=${result.order_id}`, token).then((res: any) => {
          if (res.response.transaction_status === 'pending') {
            Post('/customer/createorder', {
=======
      onSuccess: async (result) => {},
      onPending: async (result) => {
        Get(`/customer/pay?id=${result.order_id}`).then((res) => {
          if (res.response.transaction_status === "pending") {
            Post("/customer/createorder", {
>>>>>>> 08c1a034aafa99b86fe2a568264103ab261daa05
              data: {
                order_id: res.response.order_id,
                cart: cart.cartItems,
                voucher: voucher,
                total: total,
                status: {
                  title: 'sedang diproses',
                  content: '',
                },
                payment: res.response.store,
                created_at: res.response.transaction_time,
              },
            }).then((res) => {
<<<<<<< HEAD
              router.push('/customer/profile')
              Post('/customer/addtocart', {
                data: [],
              })
              dispatch(deleteAllItem())
            })
=======
              Post("/customer/addtocart", {
                data: [],
              });
              dispatch(deleteAllItem());
            });
>>>>>>> 08c1a034aafa99b86fe2a568264103ab261daa05
          }
        })
      },
      onError: async (result: any) => {
        return alert('Error')
        // return settemp(temp.concat(result));
      },
    })
  }

  return (
    <>
      <Script
        src='https://app.sandbox.midtrans.com/snap/snap.js'
        data-client-key='SB-Mid-client-A5zLo_R0ygqCcWAO'
      />
      <CForm>
        <div className='mb-3'>
          <h5 className='fw-bold'>Alamat Pengiriman</h5>
          <CFormInput
            placeholder='Tambah alamat'
            className='border-0 border-bottom border-2 rounded-0 ps-2 py-0'
            readOnly
            value={user.user.address}
          />
        </div>
        <div className='mb-3'>
          <h5 className='fw-bold'>Voucher Belanja</h5>
          <CFormInput
            type='search'
            className='border-0 border-bottom border-2 rounded-0 ps-2 py-0'
            onChange={(e) => handleVoucher(e)}
          />
        </div>
        <div className='mb-3'>
          <h5 className='fw-bold'>Total harga</h5>
          <h5
            className={`${
              isDiscount && 'text-gray m-0 text-decoration-line-through'
            }`}
          >
            Rp.
            {cart.total.toLocaleString('id-ID')}
            ,-
          </h5>
          {isDiscount && (
            <h5 className='text-success m-0 mt-2'>
              Rp.
              {total.toLocaleString('id-ID')}
              ,-
            </h5>
          )}
        </div>
        <div className='text-center'>
          <CButton
            className='w-auto text-white px-3 py-2'
            onClick={(e) => {
              e.preventDefault()
              handlePost()
            }}
          >
            Pesan Sekarang
          </CButton>
        </div>
      </CForm>
    </>
  )
}

export default React.memo(OrderDetails)
