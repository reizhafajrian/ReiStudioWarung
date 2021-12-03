import type { ReactElement } from 'react'
import { CButton, CContainer } from '@coreui/react'
import Layout from '../../components/layout/Layout'
import TableProduct from './TableProducts'
import { useRouter } from 'next/router'

const AllProducts = () => {
  const router = useRouter()

  return (
    <CContainer className='my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='fw-bold'>Stok Barang</h4>
        <CButton
          className='w-auto'
          onClick={() => router.push('/admin/products/new')}
        >
          Tambah Produk
        </CButton>
      </div>
      <TableProduct />
    </CContainer>
  )
}

export default AllProducts

AllProducts.getLayout = function getLayout(content: ReactElement) {
  return <Layout isAdmin={true}>{content}</Layout>
}
