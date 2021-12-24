import InputField from '@components/InputField'
import { CButton, CCol, CContainer, CForm, CRow } from '@coreui/react'
import { useState } from 'react'

const UpdateVoucher = () => {
  const [kode, setKode] = useState('')
  const [potongan, setPotongan] = useState('')
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
            </div>
            <div className='text-center'>
              <CButton className='w-auto' size='lg'>
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
