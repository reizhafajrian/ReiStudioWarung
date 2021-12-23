import { CButton } from '@coreui/react'
import { useState } from 'react'

interface props {
  status: string
}

const ButtonKirim = ({ status }: props) => {
  const [prosesKomplen, setProsesKomplen] = useState(false)

  return (
    <div>
      {status === 'pembayaran' && (
        <CButton className='w-auto text-white px-3 py-2 btn-secondary' disabled>
          Kirim Sekarang
        </CButton>
      )}
      {status === 'sedang diproses' && (
        <CButton className='w-auto text-white px-3 py-2'>
          Kirim Sekarang
        </CButton>
      )}
      {status === 'sedang dikirim' && (
        <CButton className='w-auto border text-dark border-dark bg-white px-3 py-2'>
          Sedang Dikirim
        </CButton>
      )}
      {status === 'komplain' &&
        (prosesKomplen ? (
          <CButton className='w-auto px-3 py-2 text-danger bg-white border border-danger'>
            Komplen Diproses
          </CButton>
        ) : (
          <CButton
            className='w-auto px-3 py-2 btn-danger'
            onClick={() => setProsesKomplen(true)}
          >
            Proses Komplen
          </CButton>
        ))}
      {status === 'selesai' && (
        <CButton className='w-auto px-3 py-2 text-secondary bg-white border-secondary'>
          Kirim Sekarang
        </CButton>
      )}
    </div>
  )
}

export default ButtonKirim
