import { useRouter } from 'next/router'
import { useState } from 'react'
import InputField from '../InputField'
import TableVouchers from './TableVouchers'
import { CCol, CContainer, CRow, CForm, CButton } from '@coreui/react'

const Vouchers = () => {
  const [kode, setKode] = useState('')
  const [potongan, setPotongan] = useState('')
  const router = useRouter()
  return (
    <CContainer>
      <div className='my-5'>
        <div className='mb-3'>
          <h5 className='fw-bold'>Kelola Vouchers</h5>
        </div>
        <CRow>
          <CCol xs={8} className='p-0'>
            <TableVouchers />
          </CCol>
          <CCol
            className='bg-white ms-4 p-4 d-flex justify-content-center'
            style={{ borderRadius: 20 }}
          >
            <CForm>
              <h5 className='fw-bold'>Tambah kode voucher</h5>
              <InputField
                secure={false}
                type='text'
                label='Kode Voucher'
                placeholder='Kode (maksimal 20 karakter)'
                onChange={setKode}
                value={kode}
                id='kode'
              />
              <InputField
                secure={false}
                type='text'
                label='Jumlah Potongan'
                placeholder='Jumlah potongan'
                onChange={setPotongan}
                value={potongan}
                id='kode'
              />
              <CButton size='lg'>Tambah</CButton>
            </CForm>
          </CCol>
        </CRow>
      </div>
    </CContainer>
  )
}

export default Vouchers
