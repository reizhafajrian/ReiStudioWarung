import ProductItem from './ProductItem'
import { CButton, CCol, CRow } from '@coreui/react'
import Filter from './Filter'
import SearchFilter from './SearchFilter'
import { useEffect, useState } from 'react'
import filterSearch from 'utils/filterSearch'
import { useRouter } from 'next/router'
import { CgMenuGridR } from 'react-icons/cg'

const Products = ({ products, result }: any) => {
  const [page, setPage] = useState(1)
  const [sidebar, setSidebar] = useState(false)
  const router = useRouter()

  const handleLoadMore = () => {
    setPage(page + 1)
    filterSearch({ router, page: page + 1 })
  }

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1)
  }, [router.query])

  return (
    <div className='position-relative mt-5'>
      {/* -------SIDEBAR MENU------- */}
      <Filter sidebar={sidebar} />

      {/* -------PRODUCT LIST------- */}
      <div className='d-flex justify-content-center justify-content-md-end'>
        <div className='product-list me-lg-5 pe-lg-5'>
          <div className='d-flex flex-column flex-md-row align-items-center justify-content-between'>
            <h4 className='fw-bold me-lg-auto mb-3 mb-lg-0'>Semua Produk</h4>
            <div className='d-flex'>
              <SearchFilter placeholder='Cari produk' />
              <CButton
                className='d-lg-none w-auto d-flex align-items-center ms-5'
                onClick={() => setSidebar(!sidebar)}
              >
                <CgMenuGridR size='24' />
                <p className='m-0 ms-2'>Filter</p>
              </CButton>
            </div>
          </div>
          {products.length > 0 ? (
            <>
              <CRow className='m-0 flex-wrap mt-5 mb-5 w-100'>
                {products.map((product: any) => (
                  <CCol
                    sm={6}
                    md={3}
                    className='p-0 d-flex justify-content-center'
                    key={product._id}
                  >
                    <ProductItem product={product} />
                  </CCol>
                ))}
              </CRow>
              <div className='w-100 text-center mb-5'>
                {result <= page * 8 ? (
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
    </div>
  )
}

export default Products
