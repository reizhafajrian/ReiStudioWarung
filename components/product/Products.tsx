import ProductItem from './ProductItem'
import { CButton, CCol, CRow } from '@coreui/react'
import Filter from './Filter'
import SearchFilter from './SearchFilter'
import { useEffect, useState } from 'react'
import filterSearch from 'utils/filterSearch'
import { useRouter } from 'next/router'

const Products = ({ products, result }: any) => {
  const [page, setPage] = useState(1)
  const router = useRouter()

  const handleLoadMore = () => {
    setPage(page + 1)
    filterSearch({ router, page: page + 1 })
  }

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1)
  }, [router.query])

  return (
    <div className='d-flex mt-5'>
      {/* -------SIDEBAR MENU------- */}
      <Filter />

      {/* -------PRODUCT LIST------- */}
      <div className='w-100 me-5 pe-5'>
        <div className='w-100 d-flex align-items-center justify-content-between'>
          <h4 className='fw-bold me-auto'>Semua Produk</h4>
          <SearchFilter placeholder='Cari produk' />
        </div>
        {products.length > 0 ? (
          <>
            <CRow className='flex-wrap mt-5 w-100'>
              {products.map((product: any) => (
                <CCol
                  md={3}
                  className='mb-5 p-0 d-flex justify-content-center'
                  key={product._id}
                >
                  <ProductItem product={product} />
                </CCol>
              ))}
            </CRow>
            <div className='w-100 text-center mb-5'>
              {result < page * 6 ? (
                ''
              ) : (
                <CButton
                  onClick={handleLoadMore}
                  className='mb-5'
                  style={{ width: 180 }}
                >
                  Muat lebih banyak
                </CButton>
              )}
            </div>
          </>
        ) : (
          <h5 className='text-center mt-5'>Product tidak tersedia</h5>
        )}
      </div>
    </div>
  )
}

export default Products
