import { CButton, CContainer } from '@coreui/react'
import TableReports from './TableReports'
import ReportCard from './ReportCard'
import FilterReport from './FilterReport'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import filterSearch from 'utils/filterSearch'

const Report = ({ report, result }: any) => {
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
          <ReportCard
            title='Laba'
            value={`Rp.${report.totalLaba.toLocaleString('id-ID')},-`}
          />
        </div>
      </div>
      <div className='my-5'>
        <div className='mb-3'>
          <h5 className='fw-bold'>Laporan barang terjual</h5>
        </div>
        <TableReports products={report.barangReport} result={result} />
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
      </div>
    </CContainer>
  )
}

export default Report
