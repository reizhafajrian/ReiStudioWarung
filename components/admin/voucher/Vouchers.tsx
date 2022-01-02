import { useRouter } from 'next/router'
import { useState } from 'react'
import InputField from '../../InputField'
import TableVouchers from './TableVouchers'
import { CCol, CContainer, CRow, CForm, CButton } from '@coreui/react'
import { useDispatch } from 'react-redux'
import { Post } from 'utils/axios'

const Vouchers = ({ vouchers }: any) => {
  const [code, setCode] = useState('')
  const [amount, setAmount] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()

  const check = code.length > 0 && amount.length > 0

  const handlePost = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })
      Post('/admin/vouchers', {
        code,
        amount,
      }).then((res: any) => {
        dispatch({
          type: 'LOADING',
          payload: false,
        })
        dispatch({
          type: 'SETALERT',
          isVisible: true,
          color: 'success',
          message: res.message,
        })
        router.reload()
      })
    } else {
      dispatch({
        type: 'SETALERT',
        isVisible: true,
        color: 'danger',
        message: 'Harap Isi Semua Form',
      })
    }
  }

  return (
    <CContainer>
      <div className='my-5'>
        <div className='mb-3'>
          <h5 className='fw-bold'>Kelola Vouchers</h5>
        </div>
        <CRow>
          <CCol xs={12} md={8} className='p-0'>
            <TableVouchers vouchers={vouchers} />
          </CCol>
          <CCol
            className='bg-white mt-5 mt-md-0 mx-3 mx-md-0 ms-md-4 p-4'
            style={{ borderRadius: 20 }}
          >
            <CForm className='w-100 px-3'>
              <h5 className='fw-bold mb-3'>Tambah kode voucher</h5>
              <InputField
                secure={false}
                type='text'
                label='Kode Voucher'
                placeholder='Kode (maksimal 20 karakter)'
                onChange={setCode}
                value={code}
                id='kode'
              />
              <InputField
                secure={false}
                type='text'
                label='Jumlah Potongan'
                placeholder='Jumlah potongan'
                onChange={setAmount}
                value={amount}
                id='kode'
              />
              <CButton
                onClick={(e) => {
                  e.preventDefault()
                  handlePost()
                }}
                size='lg'
              >
                Tambah
              </CButton>
            </CForm>
          </CCol>
        </CRow>
      </div>
    </CContainer>
  )
}

export default Vouchers
