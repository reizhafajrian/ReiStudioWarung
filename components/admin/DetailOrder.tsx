import { CButton, CContainer } from '@coreui/react'
import { CgMenuGridR } from 'react-icons/cg'
import TableOrders from './TableOrders'

const DetailOrder = () => {
  return (
    <CContainer className='my-5'>
      <div className='d-flex justify-content-between align-items-center'>
        <h4 className='fw-bold'>Riwayat Pesanan</h4>
        <CButton
          className='px-3 py-2 d-flex align-items-center border-0'
          style={{ borderRadius: 12 }}
        >
          <CgMenuGridR style={{ width: 24, height: 24 }} />
          <h6 className='m-0 d-inline ms-2'>Filter</h6>
        </CButton>
      </div>
      <TableOrders />
    </CContainer>
  )
}

export default DetailOrder
