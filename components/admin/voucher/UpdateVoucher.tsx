import InputField from '@components/InputField'
import { CButton, CCol, CContainer, CForm, CRow } from '@coreui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Put } from 'utils/axios'

const UpdateVoucher = ({ voucher }: any) => {
  const [code, setCode] = useState(voucher.code)
  const [amount, setAmount] = useState(voucher.amount)
  const dispatch = useDispatch()
  const router = useRouter()

  const check = code.length > 0 && amount.length > 0

  const handlePut = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })
      Put(`/admin/vouchers?id=${voucher._id}`, {
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

        router.push('/admin/vouchers')
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
    <CContainer className='my-5'>
      <h4 className='fw-bold mb-4'>Update Voucher</h4>
      <CRow>
        <CCol xs={12} md={6}>
          <CForm className='bg-white p-5' style={{ borderRadius: 20 }}>
            <div className='pb-3'>
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
            </div>
            <div className='text-center'>
              <CButton
                onClick={(e) => {
                  e.preventDefault()
                  handlePut()
                }}
                className='w-auto'
                size='lg'
              >
                Update Voucher
              </CButton>
            </div>
          </CForm>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default UpdateVoucher
