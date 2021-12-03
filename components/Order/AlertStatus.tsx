import { CButton, CCard, CFormTextarea } from '@coreui/react'
import React, { useState } from 'react'
import Modal from '../Modal'

interface props {
  status: number
}

const AlertStatus = ({ status }: props) => {
  const [visible, setVisible] = useState(false)
  const [komplen, setKomplen] = useState(false)
  const [keluhan, setKeluhan] = useState('')

  const komplenModal = () => {
    setVisible(false)
    setKomplen(true)
  }

  const handleKomplen = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    console.log(keluhan)
    setKeluhan(e.target.value)
  }

  return (
    <div className='mb-4'>
      {status === 1 && (
        <CCard className='bg-yellow px-5 py-4 text-gray1'>
          <h5>
            <span className='fw-bold'>Status:&nbsp;</span>Menunggu Pembayaran
          </h5>
          <p className='mb-0'>
            Lakukan pembayaran dengan transfer ke nomor:&nbsp;
            <span className='fw-bold'>12345678910</span>
          </p>
        </CCard>
      )}
      {status === 2 && (
        <CCard className='bg-orange px-5 py-4 text-gray1'>
          <h5 className='mb-0'>
            <span className='fw-bold'>Status:&nbsp;</span>Pembayaran Diterima.
            Tunggu kurir akan mengirimkan belanjaanmu!
          </h5>
        </CCard>
      )}
      {status === 3 && (
        <CCard className='bg-blue px-5 py-3 pe-3 text-gray1 '>
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='mb-0'>
              <span className='fw-bold'>Status:&nbsp;</span>Kurir sedang dalam
              perjalanan
            </h5>
            <CButton
              className='w-25'
              size='lg'
              onClick={() => setVisible(!visible)}
            >
              Pesanan diterima
            </CButton>
          </div>
        </CCard>
      )}
      {status === 4 && (
        <CCard className='bg-gray2 px-5 py-3 pe-3 text-gray1 '>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
              <h5 className='fw-bold me-1'>Status:</h5>
              <h5 className='mb-0'>
                Pihak warung akan menghubungi anda untuk <br />
                tindak lanjut komplen
              </h5>
            </div>
            <CButton
              className='w-25'
              size='lg'
              onClick={() => setVisible(!visible)}
            >
              Pesanan diterima
            </CButton>
          </div>
        </CCard>
      )}
      {status === 5 && (
        <CCard className='bg-green px-5 py-4 text-gray1'>
          <h5 className='mb-0'>
            <span className='fw-bold'>Status:&nbsp;</span>Pesanan selesai
          </h5>
        </CCard>
      )}
      {/* Modal Start */}
      <Modal visible={visible} setVisible={setVisible}>
        <h3 className='fw-bold mb-5 text-center'>
          Apakah pesanan anda sudah
          <br />
          sesuai?
        </h3>
        <div className='d-flex justify-content-between px-4 pt-3'>
          <CButton
            className='w-50 me-5'
            size='lg'
            variant='outline'
            onClick={komplenModal}
          >
            Ajukan komplen
          </CButton>
          <CButton className='w-50' size='lg'>
            Ya, sudah sesuai
          </CButton>
        </div>
      </Modal>
      <Modal visible={komplen} setVisible={setKomplen}>
        <h3 className='fw-bold mb-3 text-center'>Apa keluhan anda?</h3>
        <div className='px-4'>
          <CFormTextarea
            style={{ height: 160 }}
            placeholder='Tulis keluhan anda'
            value={keluhan}
            onChange={handleKomplen}
          ></CFormTextarea>
        </div>
        <div className='d-flex justify-content-between px-4 pt-3'>
          <CButton
            size='lg'
            variant='outline'
            onClick={() => setKomplen(!komplen)}
          >
            Batal
          </CButton>
          <CButton size='lg'>Kirim</CButton>
        </div>
      </Modal>
      {/* Modal End  */}
    </div>
  )
}

export default AlertStatus
