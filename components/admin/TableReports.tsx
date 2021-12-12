import { useRouter } from 'next/router'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

const TableReports = () => {
  const router = useRouter()
  const products = [
    {
      id: '1234',
      name: 'Beras Subang 2kg',
      sold: 100,
      buyingPrice: 'Rp. 35.000,-',
      sellingPrice: 'Rp. 35.000,-',
      category: 'Sembako',
      diskon: 'Rp. 800.000,-',
      laba: 'Rp. 200.000,-',
    },
  ]

  const headers = [
    'Nama Barang',
    'Terjual',
    'Harga Beli',
    'Harga Jual',
    'Kategori',
    'Diskon',
    'Laba',
  ]

  return (
    <div className='mt-4'>
      <CTable borderless hover>
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
          {products.map((product) => (
            <CTableRow key={product.id}>
              <CTableDataCell>{product.name}</CTableDataCell>
              <CTableDataCell>{product.sold}</CTableDataCell>
              <CTableDataCell>{product.buyingPrice}</CTableDataCell>
              <CTableDataCell>{product.sellingPrice}</CTableDataCell>
              <CTableDataCell>{product.category}</CTableDataCell>
              <CTableDataCell>{product.diskon}</CTableDataCell>
              <CTableDataCell>{product.laba}</CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableReports
