import { useRouter } from 'next/router'
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

interface props {
  products: any
  forDashboard?: boolean
}

const TableProduct = ({ products, forDashboard = false }: props) => {
  const router = useRouter()

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
            : products.map((product: any) => (
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
              ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableProduct
