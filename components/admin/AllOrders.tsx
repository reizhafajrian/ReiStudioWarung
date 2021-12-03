import { CButton, CContainer } from '@coreui/react'
import { CgMenuGridR } from 'react-icons/cg'
import TableOrders from './TableOrders'

const AllOrders = () => {
  return (
    <CContainer className='my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='fw-bold'>Riwayat Pesanan</h4>
        <CButton className='w-auto d-flex align-items-center'>
          <CgMenuGridR size='24' />
          <p className='m-0 ms-2'>Filter</p>
        </CButton>
      </div>
      <TableOrders />
    </CContainer>
  )
}

export default AllOrders
