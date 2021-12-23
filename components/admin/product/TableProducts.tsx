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

interface props {
  products: any
  forDashboard?: boolean
  result: number
}

const TableProduct = ({ products, forDashboard = false, result }: props) => {
  const router = useRouter()
  const [visible, setVisible] = useState(false)
  const [message, setMessage] = useState('')
  const [productId, SetProductId] = useState('')

  const handleDelete = async (id: string) => {
    console.log(productId)

    const req = await fetch(`/api/products/delete?id=${id}`, {
      method: 'DELETE',
    })

    const res = await req.json()

    setVisible(!visible)
    setMessage(res.message)

    return router.push({ pathname: router.pathname, query: router.query })
  }

  const headers = [
    'Nama Barang',
    'Jumlah',
    'Harga Beli',
    'Harga Jual',
    'Kategori',
    'Update Terakhir',
    'Aksi',
  ]

  return (
    <>
      <div className='mt-4'>
        {message && <h5>{message}</h5>}
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
            {forDashboard
              ? products.slice(0, 5).map((product: any) => (
                  <CTableRow key={product._id}>
                    <CTableDataCell>{product.name}</CTableDataCell>
                    <CTableDataCell>{product.stock}</CTableDataCell>
                    <CTableDataCell>{product.buying_price}</CTableDataCell>
                    <CTableDataCell>{product.selling_price}</CTableDataCell>
                    <CTableDataCell>{product.category}</CTableDataCell>
                    <CTableDataCell>
                      {new Date(product.updatedAt).toLocaleDateString()}
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
                      <CTableDataCell>{product.buying_price}</CTableDataCell>
                      <CTableDataCell>{product.selling_price}</CTableDataCell>
                      <CTableDataCell>{product.category}</CTableDataCell>
                      <CTableDataCell>
                        {new Date(product.updatedAt).toLocaleDateString()}
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
