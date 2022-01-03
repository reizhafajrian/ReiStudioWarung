import Link from 'next/link'
import { CContainer } from '@coreui/react'
import TableReports from './TableReports'
import ReportCard from './ReportCard'
import FilterReport from './FilterReport'

const Report = ({ report }: any) => {
  return (
    <CContainer>
      {/* LAPORAN PESANAN */}
      <div className='my-5'>
        <div className='d-flex flex-wrap justify-content-between mb-3'>
          <h5 className='fw-bold'>Overview</h5>
          <FilterReport />
        </div>
        <div className='d-flex flex-wrap justify-content-center justify-content-md-start'>
          <ReportCard title='Barang Terjual' value={report.barangTerjual} />
          <ReportCard title='Jumlah Order' value={report.jumlahOrder} />
          <ReportCard title='Laba' value={`Rp. ${report.totalLaba},-`} />
        </div>
      </div>
      <div className='my-5'>
        <div className='mb-3'>
          <h5 className='fw-bold'>Laporan barang terjual</h5>
        </div>
        <TableReports products={report.barangReport} />
      </div>
    </CContainer>
  )
}

export default Report
