import { useState } from 'react'
import { useRouter } from 'next/router'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CButton,
} from '@coreui/react'
import { IoMdTrash } from 'react-icons/io'
import { RiPencilFill } from 'react-icons/ri'
import Modal from '../../Modal'
import { useDispatch } from 'react-redux'
import { Delete } from 'utils/axios'

const TableVouchers = ({ vouchers }: any) => {
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState('')

  const router = useRouter()
  const dispatch = useDispatch()

  const headers = ['Kode Voucher', 'Jumlah Potongan', 'Status', 'Aksi']

  const handleDelete = (id: any) => {
    setVisible(false)
    dispatch({
      type: 'LOADING',
      payload: true,
    })
    Delete(`/admin/vouchers?id=${id}`).then((res: any) => {
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
  }

  return (
    <>
      <div className='mt-4'>
        <CTable borderless hover responsive>
          <CTableHead className='h6'>
            <CTableRow>
              {headers.map((title, index) => (
                <CTableHeaderCell
                  key={index}
                  className='px-3 py-4 border-0 bg-white align-middle'
                >
                  {title}
                </CTableHeaderCell>
              ))}
            </CTableRow>
          </CTableHead>
          <CTableBody className='bg-white h6 align-middle'>
            {vouchers.map((v: any) => (
              <CTableRow key={v._id}>
                <CTableDataCell>{v.code}</CTableDataCell>
                <CTableDataCell>{v.amount}</CTableDataCell>
                <CTableDataCell>
                  {new Date(v.updatedAt).toLocaleDateString()}
                </CTableDataCell>
                <CTableDataCell className='d-flex'>
                  <CButton
                    color='warning'
                    className='w-auto me-2'
                    onClick={() => {
                      router.push(`/admin/vouchers/${v.code}`)
                    }}
                  >
                    <RiPencilFill fill='white' size='24' />
                  </CButton>
                  <CButton
                    className='w-auto'
                    color='danger'
                    onClick={() => {
                      setVisible(!visible)
                      setId(v._id)
                    }}
                  >
                    <IoMdTrash fill='white' size='24' />
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
      {/* Modal Start*/}
      <Modal visible={visible} setVisible={setVisible}>
        <h3 className='fw-bold mb-5 text-center'>
          Apakah anda yakin ingin{' '}
          <span className='d-md-block'>menghapus voucher?</span>
        </h3>
        <div className='d-flex justify-content-between px-md-4 pt-3'>
          <CButton
            size='lg'
            variant='outline'
            onClick={() => setVisible(!visible)}
          >
            Batal
          </CButton>
          <CButton size='lg' onClick={() => handleDelete(id)}>
            Ya
          </CButton>
        </div>
      </Modal>
      {/* Modal End */}
    </>
  )
}

export default TableVouchers
