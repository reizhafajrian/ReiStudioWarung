import { CContainer } from '@coreui/react'
import FilterOrder from './FilterOrder'
import TableOrders from './TableOrders'

const AllOrders = () => {
  return (
    <CContainer className='my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='fw-bold mb-0'>Riwayat Pesanan</h4>
        <FilterOrder />
      </div>
      <TableOrders />
    </CContainer>
  )
}

export default AllOrders
