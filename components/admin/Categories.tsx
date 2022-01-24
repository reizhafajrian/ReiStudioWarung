import { useRouter } from 'next/router'
import { useState } from 'react'
import {
  CCol,
  CContainer,
  CRow,
  CForm,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
import { useDispatch } from 'react-redux'
import { Delete, Post } from 'utils/axios'
import InputField from '@components/InputField'
import { IoMdTrash } from 'react-icons/io'
import Modal from '@components/Modal'

const Categories = ({ categories }: any) => {
  const [tambahKat, setTambahKat] = useState('')
  const [visible, setVisible] = useState(false)
  const [id, setId] = useState('')
  const router = useRouter()
  const dispatch = useDispatch()

  const check = tambahKat.length > 0

  const headers = ['Kategori', 'Aksi']

  const handleDelete = (id: any) => {
    setVisible(false)
    dispatch({
      type: 'LOADING',
      payload: true,
    })
    Delete(`/products/categories?id=${id}`).then((res: any) => {
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

  const handlePost = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })

      Post('/products/categories', { name: tambahKat }).then((res: any) => {
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
          <h5 className='fw-bold'>Kelola Kategori Produk</h5>
        </div>
        <CRow>
          <CCol xs={12} md={5} className='p-0'>
            {/* Table Start */}
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
                  {categories?.map((c: any) => (
                    <CTableRow key={c._id}>
                      <CTableDataCell className='p-0 p-2 px-3'>
                        {c.name}
                      </CTableDataCell>
                      <CTableDataCell className='p-0 p-2 px-3 d-flex'>
                        <CButton
                          className='w-auto'
                          color='danger'
                          onClick={() => {
                            setVisible(!visible)
                            setId(c._id)
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
                <span className='d-md-block'>menghapus kategori?</span>
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
            {/* Table End */}
          </CCol>
          <CCol>
            <CForm
              className='bg-white w-100 px-3 mt-5 mt-md-4 ms-md-4 p-4'
              style={{ borderRadius: 20 }}
            >
              <h5 className='fw-bold mb-3'>Tambah Kategori</h5>
              <InputField
                secure={false}
                type='text'
                placeholder='Tambah kategori'
                onChange={setTambahKat}
                value={tambahKat}
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

export default Categories
