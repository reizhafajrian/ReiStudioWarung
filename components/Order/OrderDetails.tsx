import { CForm, CFormInput } from '@coreui/react'
import { useMemo, useState } from 'react'
import Select from 'react-select'
import Button from '../Button'

const OrderDetails = () => {
  const options = useMemo(
    () => [{ value: 'transferVA', label: 'Transfer VA' }],
    []
  )

  const [disabled, setDisabled] = useState(true)

  return (
    <div>
      <CForm>
        <div className='mb-3'>
          <h5 className='fw-bold'>Alamat Pengiriman</h5>
          <CFormInput
            placeholder='Tambah alamat'
            className='border-0 border-bottom border-2 rounded-0 ps-2 py-0'
          />
        </div>
        <div className='mb-3'>
          <h5 className='fw-bold'>Voucher Belanja</h5>
          <CFormInput
            placeholder='Kode voucher'
            className='border-0 border-bottom border-2 rounded-0 ps-2 py-0'
          />
        </div>
        <div className='mb-3'>
          <h5 className='fw-bold'>Metode Pembayaran</h5>
          <Select
            className='top'
            classNamePrefix='inner'
            options={options}
            placeholder='-Pilih-'
          />
        </div>
        <div className='mb-3'>
          <h5 className='fw-bold'>Total harga</h5>
          <h5>Rp.27.000,-</h5>
        </div>
        <div className='text-center'>
          <Button
            title='Pesan sekarang'
            borderRadius='12px'
            style={`text-white px-3 py-2 ${
              disabled ? 'disabled bg-gray  border-gray' : 'bg-dark'
            }`}
          />
        </div>
      </CForm>
    </div>
  )
}

export default OrderDetails
