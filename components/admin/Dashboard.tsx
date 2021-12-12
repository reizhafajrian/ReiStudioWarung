import Link from 'next/link'
import { CContainer } from '@coreui/react'
import TableOrders from '../../components/admin/TableOrders'
import TableProducts from '../../components/admin/TableProducts'

const Dashboard = ({ products }: any) => {
  return (
    <CContainer>
      {/* LAPORAN PESANAN */}
      <div className='my-5'>
        <div className='d-flex justify-content-between mb-3'>
          <h5 className='fw-bold'>Laporan Pesanan</h5>
          <Link href='/admin/report'>
            <a>
              <h5>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
        <div className='d-flex'>
          <ReportCard title='Order (hari ini)' value={25} />
          <ReportCard title='Order (bulan ini)' value={750} />
          <ReportCard title='Barang Terjual' value={1000} />
        </div>
      </div>
      {/* KELOLA VOUCHER */}
      <div className='my-5'>
        <h5 className='fw-bold mb-3'>Kelola Voucher</h5>
        <div
          className='bg-white d-flex align-items-center justify-content-between p-4'
          style={{ borderRadius: 20 }}
        >
          <h5 className='fw-normal m-0'>
            Ada 5 voucher yang sudah kamu tambahkan
          </h5>
          <Link href='/admin/vouchers'>
            <a>
              <h5 className='m-0'>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
      </div>
      {/* PESANAN BERLANGSUNG*/}
      <div className='my-5'>
        <div className='d-flex justify-content-between mb-3'>
          <h5 className='fw-bold'>Pesanan Sedang Berlangsung</h5>
          <Link href='/admin/history'>
            <a>
              <h5>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
        <TableOrders />
      </div>
      {/* PERSEDIAAN PRODUK */}
      <div className='my-5'>
        <div className='d-flex justify-content-between mb-3'>
          <h5 className='fw-bold'>Persediaan Produk</h5>
          <Link href='/admin/products'>
            <a>
              <h5>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
        <TableProducts products={products} forDashboard={true} />
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

export default Dashboard
