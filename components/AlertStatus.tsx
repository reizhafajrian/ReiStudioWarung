import { CFormTextarea } from '@coreui/react'
import React, { useState } from 'react'
import Button from './Button'
import Card from './Card'
import Modal from './Modal'

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
        <Card style='bg-yellow px-5 py-4 text-gray1'>
          <h5>
            <span className='fw-bold'>Status:&nbsp;</span>Menunggu Pembayaran
          </h5>
          <p className='mb-0'>
            Lakukan pembayaran dengan transfer ke nomor:&nbsp;
            <span className='fw-bold'>12345678910</span>
          </p>
        </Card>
      )}
      {status === 2 && (
        <Card style='bg-orange px-5 py-4 text-gray1'>
          <h5 className='mb-0'>
            <span className='fw-bold'>Status:&nbsp;</span>Pembayaran Diterima.
            Tunggu kurir akan mengirimkan belanjaanmu!
          </h5>
        </Card>
      )}
      {status === 3 && (
        <Card style='bg-blue px-5 py-3 pe-3 text-gray1 '>
          <div className='d-flex align-items-center justify-content-between'>
            <h5 className='mb-0'>
              <span className='fw-bold'>Status:&nbsp;</span>Kurir sedang dalam
              perjalanan
            </h5>
            <Button
              title='Pesanan diterima'
              style='text-white bg-dark fw-bold px-4 py-3'
              borderRadius='12px'
              onClick={() => setVisible(!visible)}
            />
          </div>
        </Card>
      )}
      {status === 4 && (
        <Card style='bg-gray2 px-5 py-3 pe-3 text-gray1 '>
          <div className='d-flex align-items-center justify-content-between'>
            <div className='d-flex'>
              <h5 className='fw-bold me-1'>Status:</h5>
              <h5 className='mb-0'>
                Pihak warung akan menghubungi anda untuk <br />
                tindak lanjut komplen
              </h5>
            </div>
            <Button
              title='Pesanan diterima'
              style='text-white bg-dark fw-bold px-4 py-3'
              borderRadius='12px'
              onClick={() => setVisible(!visible)}
            />
          </div>
        </Card>
      )}
      {status === 5 && (
        <Card style='bg-green px-5 py-4 text-gray1'>
          <h5 className='mb-0'>
            <span className='fw-bold'>Status:&nbsp;</span>Pesanan selesai
          </h5>
        </Card>
      )}
      {/* Modal Start */}
      <Modal visible={visible} setVisible={setVisible}>
        <h3 className='fw-bold mb-5 text-center'>
          Apakah pesanan anda sudah
          <br />
          sesuai?
        </h3>
        <div className='d-flex justify-content-between px-4 pt-3'>
          <Button
            title='Ajukan komplen'
            style='text-dark bg-white border-dark fw-bold py-3'
            width='10rem'
            borderRadius='12px'
            onClick={komplenModal}
          />
          <Button
            title='Ya, sudah sesuai'
            style='text-white bg-dark fw-bold py-3'
            width='10rem'
            borderRadius='12px'
          />
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
          <Button
            title='Batal'
            style='text-dark bg-white border-dark fw-bold py-3'
            width='10rem'
            borderRadius='12px'
            onClick={() => setKomplen(!komplen)}
          />
          <Button
            title='Kirim'
            style='text-white bg-dark fw-bold py-3'
            width='10rem'
            borderRadius='12px'
            path='/'
          />
        </div>
      </Modal>
      {/* Modal End  */}
    </div>
  )
}

export default AlertStatus
