import type { ReactElement } from 'react'
import { CButton, CContainer, CTableDataCell, CTableRow } from '@coreui/react'
import Layout from '../../components/Layout'
import Table from '../../components/Table'
import { IoMdTrash } from 'react-icons/io'
import { RiPencilFill } from 'react-icons/ri'
import { CgMenuGridR } from 'react-icons/cg'

const History = () => {
  const headers = [
    'Nama',
    'Alamat',
    'Total Harga',
    'Metode Pembayaran',
    'Status',
  ]
  return (
    <CContainer className='p-0'>
      <div className='pt-3 mt-4'>
        <div className='d-flex justify-content-between align-items-center'>
          <h4 className='fw-bold'>Riwayat Pesanan</h4>
          <CButton
            className='bg-dark text-white px-3 py-2 d-flex align-items-center border-0'
            style={{ borderRadius: 12 }}
          >
            <CgMenuGridR style={{ width: 24, height: 24 }} />
            <h5 className='m-0 d-inline ms-2'>Filter</h5>
          </CButton>
        </div>
        <Table headers={headers}>
          <CTableRow>
            <CTableDataCell>Johnny Doe</CTableDataCell>
            <CTableDataCell>Jalan Lapangan Banteng no. 15...</CTableDataCell>
            <CTableDataCell>Rp. 125.000,-</CTableDataCell>
            <CTableDataCell>Transfer Bank</CTableDataCell>
            <CTableDataCell>Selesai</CTableDataCell>
          </CTableRow>
        </Table>
      </div>
    </CContainer>
  )
}

export default History

History.getLayout = function getLayout(content: ReactElement) {
  return <Layout isAdmin={true}>{content}</Layout>
}
