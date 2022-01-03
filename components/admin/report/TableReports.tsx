import { useRouter } from 'next/router'
import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

const TableReports = ({ products }: any) => {
  const router = useRouter()

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
          {products.map((product: any) => (
            <CTableRow key={product._id}>
              <CTableDataCell>{product.namaBarang}</CTableDataCell>
              <CTableDataCell>{product.terjual}</CTableDataCell>
              <CTableDataCell>{product.hargaBeli}</CTableDataCell>
              <CTableDataCell>{product.hargaJual}</CTableDataCell>
              <CTableDataCell>{product.kategori}</CTableDataCell>
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
