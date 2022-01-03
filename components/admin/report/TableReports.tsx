import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from '@coreui/react'

const TableReports = ({ products, result }: any) => {
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
          {products
            .slice(result == 6 ? 0 : result - 6, products.length)
            .map((product: any) => (
              <CTableRow key={product._id}>
                <CTableDataCell>{product.namaBarang}</CTableDataCell>
                <CTableDataCell>{product.terjual}</CTableDataCell>
                <CTableDataCell>
                  Rp.
                  {product.hargaBeli.toLocaleString('id-ID')}
                  ,-
                </CTableDataCell>
                <CTableDataCell>
                  Rp.
                  {product.hargaJual.toLocaleString('id-ID')}
                  ,-
                </CTableDataCell>
                <CTableDataCell>{product.kategori}</CTableDataCell>
                <CTableDataCell>
                  Rp.
                  {product.diskon.toLocaleString('id-ID')}
                  ,-
                </CTableDataCell>
                <CTableDataCell>
                  Rp.
                  {product.laba.toLocaleString('id-ID')}
                  ,-
                </CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableReports
