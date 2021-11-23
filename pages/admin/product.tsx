import type { ReactElement } from 'react'
import { CButton, CContainer, CTableDataCell, CTableRow } from '@coreui/react'
import Layout from '../../components/Layout'
import Button from '../../components/Button'
import Table from '../../components/Table'
import { IoMdTrash } from 'react-icons/io'
import { RiPencilFill } from 'react-icons/ri'

const Product = () => {
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
    <CContainer className='p-0'>
      <div className='pt-3 mt-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='fw-bold'>Stok Barang</h4>
          <Button
            title='Tambah Produk'
            style='bg-dark text-white px-3 py-2'
            borderRadius='12px'
          />
        </div>
        <Table headers={headers}>
          <CTableRow>
            <CTableDataCell>Beras Subang 2kg</CTableDataCell>
            <CTableDataCell>100</CTableDataCell>
            <CTableDataCell>Rp. 35.000,-</CTableDataCell>
            <CTableDataCell>Rp. 35.000,-</CTableDataCell>
            <CTableDataCell>Sembako</CTableDataCell>
            <CTableDataCell>24/07/21</CTableDataCell>
            <CTableDataCell>
              <CButton
                color='warning'
                className='me-2'
                style={{ borderRadius: 12 }}
              >
                <RiPencilFill fill='white' />
              </CButton>
              <CButton color='danger' style={{ borderRadius: 12 }}>
                <IoMdTrash fill='white' />
              </CButton>
            </CTableDataCell>
          </CTableRow>
        </Table>
      </div>
    </CContainer>
  )
}

export default Product

Product.getLayout = function getLayout(content: ReactElement) {
  return <Layout isAdmin={true}>{content}</Layout>
}
