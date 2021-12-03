import Link from 'next/link'
import { CContainer } from '@coreui/react'
import TableReports from './TableReports'

const Report = () => {
  return (
    <CContainer>
      {/* LAPORAN PESANAN */}
      <div className='my-5'>
        <div className='d-flex justify-content-between mb-3'>
          <h5 className='fw-bold'>Overview</h5>
          <p>filter toggle</p>
        </div>
        <div className='d-flex'>
          <ReportCard title='Barang Terjual' value={1000} />
          <ReportCard title='Jumlah Order' value={1000} />
          <ReportCard title='Laba' value='Rp3jt' />
        </div>
      </div>
      <div className='my-5'>
        <div className='mb-3'>
          <h5 className='fw-bold'>Laporan barang terjual</h5>
        </div>
        <TableReports />
      </div>
    </CContainer>
  )
}

function ReportCard({ title, value }: any) {
  return (
    <div
      className='bg-white d-flex flex-column align-items-center py-4 me-4'
      style={{ width: 280, height: 180, borderRadius: 20 }}
    >
      <h5 className='fw-normal mb-4 text-secondary'>{title}</h5>
      <h1 className='fw-bold'>{value}</h1>
    </div>
  )
}

export default Report
