import { CButton, CContainer } from '@coreui/react'
import TableProduct from './TableProducts'
import { useRouter } from 'next/router'

const AllProducts = ({ products }: any) => {
  const router = useRouter()

  return (
    <CContainer className='my-5'>
      <div className='d-flex flex-wrap justify-content-between align-items-center'>
        <h4 className='fw-bold mb-0'>Stok Barang</h4>
        <CButton
          className='w-auto'
          onClick={() => router.push('/admin/products/new')}
        >
          Tambah Produk
        </CButton>
      </div>
      <TableProduct products={products} />
    </CContainer>
  )
}

export default AllProducts
