import { CButton, CContainer } from '@coreui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import filterSearch from 'utils/filterSearch'
import FilterOrder from './FilterOrder'
import TableOrders from './TableOrders'

const AllOrders = ({ orders, result }: any) => {
  const router = useRouter()
  const [page, setPage] = useState(1)

  const handleNext = () => {
    setPage(page + 1)
    filterSearch({ router, page: page + 1 })
  }
  const handlePrev = () => {
    setPage(page - 1)
    filterSearch({ router, page: page - 1 })
  }

  useEffect(() => {
    if (Object.keys(router.query).length === 0) setPage(1)
  }, [router.query])

  return (
    <CContainer className='my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='fw-bold mb-0'>Riwayat Pesanan</h4>
        <FilterOrder />
      </div>
      <TableOrders orders={orders} result={result} />
      <div className='d-flex justify-content-end align-items-center'>
        <CButton
          onClick={handlePrev}
          disabled={page == 1 && true}
          style={{ borderRadius: 0, fontWeight: 'bold' }}
        >
          Prev
        </CButton>
        <h5 className='m-0 mx-2 p-2 px-3 bg-white border'>{page}</h5>
        <CButton
          onClick={handleNext}
          disabled={result < page * 6 && true}
          style={{ borderRadius: 0, fontWeight: 'bold' }}
        >
          Next
        </CButton>
      </div>
    </CContainer>
  )
}

export default AllOrders
