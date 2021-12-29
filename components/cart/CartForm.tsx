import { useMemo, useState } from 'react'
import * as React from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import Select from 'react-select'
import Script from 'next/script'
import { CButton, CForm, CFormInput } from '@coreui/react'
import axios from 'axios'
import { Get, Post } from 'utils/axios'
import { deleteAllItem } from 'redux/actions/cartActions'

declare global {
  interface Window {
    snap: any
  }
}

const OrderDetails = () => {
  const { cart, user } = useSelector((state: RootStateOrAny) => state)
  const options = useMemo(
    () => [{ value: 'transferVA', label: 'Transfer VA' }],
    []
  )

  const [disabled, setDisabled] = useState(false)
  const dispatch = useDispatch()
  const [temp, settemp] = useState([])

  const handlePost = async () => {
    const post: any = await Post('/customer/pay', {
      price: cart.total,
      email: user.user.email,
      first_name: user.user.name,
      last_name: user.user.name,
      phone: user.user.phone,
    })
    // alert("s")
    // window.location.href = post.transaction.redirect_url;

    window.snap.pay(post.transaction.token, {
      onSuccess: async (result: any) => {
        console.log(result, 'result')
      },
      onPending: async (result: any) => {
        Get(`/customer/pay?id=${result.order_id}`).then((res: any) => {
          if (res.response.transaction_status === 'pending') {
            Post('/customer/createorder', {
              data: {
                order_id: res.order_id,
                cart: cart.cartItems,
              },
            }).then((res) => {
              dispatch(deleteAllItem())
            })
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
            value={user.address}
          />
        </div>
        <div className='mb-3'>
          <h5 className='fw-bold'>Voucher Belanja</h5>
          <CFormInput
            placeholder='Kode voucher'
            className='border-0 border-bottom border-2 rounded-0 ps-2 py-0'
          />
        </div>
        {/* <div className="mb-3">
        <h5 className="fw-bold">Metode Pembayaran</h5>
        <Select
          className="top"
          classNamePrefix="inner"
          options={options}
          placeholder="-Pilih-"
        />
      </div> */}
        <div className='mb-3'>
          <h5 className='fw-bold'>Total harga</h5>
          <h5>Rp.{cart?.total.toLocaleString('id-ID')},-</h5>
        </div>
        <div className='text-center'>
          <CButton
            className={`w-auto text-white px-3 py-2 ${
              disabled ? 'disabled bg-gray  border-gray' : 'bg-dark'
            }`}
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
