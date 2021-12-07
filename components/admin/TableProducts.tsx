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
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getProducts } from '../../redux/actions/productActions'

const TableProduct = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const { products } = useSelector((state: RootStateOrAny) => state.product)

  useEffect(() => {
    dispatch(getProducts())
  })

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
      <CTable hover>
        <CTableHead className='h6 bg-white'>
          <CTableRow>
            {headers.map((title, index) => (
              <CTableHeaderCell key={index} className='px-3 py-4 border-0'>
                {title}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <div className='mb-3'></div>
        <CTableBody className='h6 bg-white py-4 align-middle'>
          {products.map((product: any) => (
            <CTableRow key={product.id}>
              <CTableDataCell>{product.name}</CTableDataCell>
              <CTableDataCell>{product.stock}</CTableDataCell>
              <CTableDataCell>{product.buyingPrice}</CTableDataCell>
              <CTableDataCell>{product.sellingPrice}</CTableDataCell>
              <CTableDataCell>{product.category}</CTableDataCell>
              <CTableDataCell>{product.lastUpdated}</CTableDataCell>
              <CTableDataCell>
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
