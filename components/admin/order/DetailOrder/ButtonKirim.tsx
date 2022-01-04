import { CButton } from '@coreui/react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { Put } from 'utils/axios'

const ButtonKirim = ({ status }: any) => {
  console.log(status)

  const router = useRouter()
  const { query } = useRouter()
  const dispatch = useDispatch()

  const handleKirimBarang = () => {
    dispatch({
      type: 'LOADING',
      payload: true,
    })

    const status = {
      title: 'sedang dikirim',
      content: '',
    }
    Put(`/orders?id=${query.oid}`, { status: status }).then((res) => {
      dispatch({
        type: 'LOADING',
        payload: false,
      })
      dispatch({
        type: 'SETALERT',
        isVisible: true,
        color: 'success',
        message: 'Berhasil mengupdate status',
      })
      router.reload()
    })
  }

  const handleProsesKomplain = () => {
    dispatch({
      type: 'LOADING',
      payload: true,
    })

    const komplainData = {
      title: 'komplain diproses',
      content: status.content,
    }
    Put(`/orders?id=${query.oid}`, { status: komplainData }).then((res) => {
      dispatch({
        type: 'LOADING',
        payload: false,
      })
      dispatch({
        type: 'SETALERT',
        isVisible: true,
        color: 'success',
        message: 'Berhasil mengupdate status',
      })
      router.reload()
    })
  }

  return (
    <div>
      {status.title === 'pembayaran' && (
        <CButton className='w-auto text-white px-3 py-2 btn-secondary' disabled>
          Kirim Sekarang
        </CButton>
      )}
      {status.title === 'sedang diproses' && (
        <CButton
          className='w-auto text-white px-3 py-2'
          onClick={handleKirimBarang}
        >
          Kirim Sekarang
        </CButton>
      )}
      {status.title === 'sedang dikirim' && (
        <CButton
          className='w-auto border text-dark border-dark bg-white px-3 py-2'
          disabled
        >
          Sedang Dikirim
        </CButton>
      )}
      {status.title === 'komplain' && (
        <CButton
          className='w-auto px-3 py-2 btn-danger'
          onClick={handleProsesKomplain}
        >
          Proses Komplen
        </CButton>
      )}
      {status.title === 'komplain diproses' && (
        <CButton
          className='w-auto px-3 py-2 text-danger bg-white border border-danger'
          disabled
        >
          Komplen Diproses
        </CButton>
      )}
      {status.title === 'selesai' && (
        <CButton
          className='w-auto px-3 py-2 text-secondary bg-white border-secondary'
          disabled
        >
          selesai
        </CButton>
      )}
    </div>
  )
}

export default ButtonKirim
