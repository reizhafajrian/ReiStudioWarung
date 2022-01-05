import { useRouter } from 'next/router'
import Modal from '../../Modal'
import { IoMdTrash } from 'react-icons/io'
import { RiPencilFill } from 'react-icons/ri'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CTableDataCell,
} from '@coreui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Delete } from 'utils/axios'

interface props {
  products: any
  forDashboard?: boolean
  result?: number
}

const TableProduct = ({
  products,
  forDashboard = false,
  result = 6,
}: props) => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [productId, SetProductId] = useState('')
  const dispatch = useDispatch()

  const handleDelete = (id: string) => {
    setVisible(!visible)
    dispatch({
      type: 'LOADING',
      payload: true,
    })

    Delete(`/admin/products?id=${id}`).then((res: any) => {
      router.push('/admin/products')
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
    })
  }

  const headers = [
    'Nama Barang',
    'Jumlah',
    'Harga Beli',
    'Harga Jual/Sewa',
    'Kategori',
    'Update Terakhir',
    'Aksi',
  ]

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
            {!products && (
              <CTableRow>
                <CTableDataCell>Produk Kosong</CTableDataCell>
              </CTableRow>
            )}
            {forDashboard
              ? products.slice(0, 5).map((product: any) => (
                  <CTableRow key={product._id}>
                    <CTableDataCell>{product.name}</CTableDataCell>
                    <CTableDataCell>{product.stock}</CTableDataCell>
                    <CTableDataCell>
                      Rp.
                      {product.buying_price.toLocaleString('id-ID')}
                      ,-
                    </CTableDataCell>
                    <CTableDataCell>
                      Rp.
                      {product.selling_price.toLocaleString('id-ID')}
                      ,-
                    </CTableDataCell>
                    <CTableDataCell>{product.category}</CTableDataCell>
                    <CTableDataCell>
                      {new Date(product.updatedAt).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </CTableDataCell>
                    <CTableDataCell className='d-flex'>
                      <CButton
                        color='warning'
                        className='w-auto me-2'
                        onClick={() => {
                          router.push(`/admin/products/${product.id}`)
                        }}
                      >
                        <RiPencilFill fill='white' size='24' />
                      </CButton>
                      <CButton className='w-auto' color='danger'>
                        <IoMdTrash fill='white' size='24' />
                      </CButton>
                    </CTableDataCell>
                  </CTableRow>
                ))
              : products
                  .slice(result == 6 ? 0 : result - 6, products.length)
                  .map((product: any) => (
                    <CTableRow key={product._id}>
                      <CTableDataCell>{product.name}</CTableDataCell>
                      <CTableDataCell>{product.stock}</CTableDataCell>
                      <CTableDataCell>
                        Rp.
                        {product.buying_price.toLocaleString('id-ID')}
                        ,-
                      </CTableDataCell>
                      <CTableDataCell>
                        Rp.
                        {product.selling_price.toLocaleString('id-ID')}
                        ,-
                        {product.renting_price && (
                          <p className='m-0 mt-1'>
                            Rp.
                            {product.renting_price.toLocaleString('id-ID')}
                            ,-
                          </p>
                        )}
                      </CTableDataCell>
                      <CTableDataCell>{product.category}</CTableDataCell>
                      <CTableDataCell>
                        {new Date(product.updatedAt).toLocaleDateString(
                          'id-ID',
                          {
                            year: 'numeric',
                            month: '2-digit',
                            day: '2-digit',
                          }
                        )}
                      </CTableDataCell>
                      <CTableDataCell className='d-flex'>
                        <CButton
                          color='warning'
                          className='w-auto me-2'
                          onClick={() => {
                            router.push(`/admin/products/${product._id}`)
                          }}
                        >
                          <RiPencilFill fill='white' size='24' />
                        </CButton>
                        <CButton
                          className='w-auto'
                          color='danger'
                          onClick={() => {
                            SetProductId(product._id)
                            setVisible(!visible)
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
          <span className='d-md-block'>menghapus produk?</span>
        </h3>
        <div className='d-flex justify-content-between px-md-4 pt-3'>
          <CButton
            size='lg'
            variant='outline'
            onClick={() => setVisible(!visible)}
          >
            Batal
          </CButton>
          <CButton size='lg' onClick={() => handleDelete(productId)}>
            Ya
          </CButton>
        </div>
      </Modal>
      {/* Modal End */}
    </>
  )
}

export default TableProduct
