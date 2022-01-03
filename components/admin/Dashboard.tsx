import Link from 'next/link'
import { CContainer } from '@coreui/react'
import TableOrders from './order/TableOrders'
import TableProducts from './product/TableProducts'
import ReportCard from './report/ReportCard'

const Dashboard = ({ reports, products, orders, vouchers }: any) => {
  return (
    <CContainer className='dashboard'>
      {/* LAPORAN PESANAN */}
      <div className='my-5'>
        <div className='title mb-3'>
          <h5 className='fw-bold'>Laporan Pesanan</h5>
          <Link href='/admin/report'>
            <a>
              <h5 className='showpage'>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
        <div className='d-flex flex-wrap justify-content-center justify-content-md-start'>
          <ReportCard title='Order (hari ini)' value={reports.todayOrders} />
          <ReportCard
            title='Order (bulan ini)'
            value={reports.currentMonthOrders}
          />
          <ReportCard title='Barang Terjual' value={reports.barangTerjual} />
        </div>
      </div>
      {/* KELOLA VOUCHER */}
      <div className='my-5'>
        <h5 className='fw-bold mb-3'>Kelola Voucher</h5>
        <div className='title bg-white p-4' style={{ borderRadius: 20 }}>
          <h6 className='fw-normal mb-2 m-md-0'>
            Ada {vouchers.length} voucher yang sudah kamu tambahkan
          </h6>
          <Link href='/admin/vouchers'>
            <a>
              <h5 className='showpage mb-0'>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
      </div>
      {/* PESANAN BERLANGSUNG*/}
      <div className='my-5'>
        <div className='title mb-3'>
          <h5 className='fw-bold'>Pesanan Sedang Berlangsung</h5>
          <Link href='/admin/history'>
            <a>
              <h5 className='showpage'>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
        <TableOrders orders={orders} forDashboard={true} />
      </div>
      {/* PERSEDIAAN PRODUK */}
      <div className='my-5'>
        <div className='title mb-3'>
          <h5 className='fw-bold'>Persediaan Produk</h5>
          <Link href='/admin/products'>
            <a>
              <h5 className='showpage'>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
        <TableProducts products={products} forDashboard={true} />
      </div>
    </CContainer>
  )
}

export default Dashboard
