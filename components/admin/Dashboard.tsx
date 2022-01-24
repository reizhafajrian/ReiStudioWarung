import Link from 'next/link'
import { CButton, CContainer } from '@coreui/react'
import TableOrders from './order/TableOrders'
import TableProducts from './product/TableProducts'
import ReportCard from './report/ReportCard'
import TableCustomers from './customer/TableCustomers'

const Dashboard = ({ reports, products, orders, vouchers, customers }: any) => {
  return (
    <CContainer className='dashboard'>
      <div className='text-end mt-5'>
        <CButton href='/admin/register' size='lg' className='w-auto me-2'>
          Register Admin Baru
        </CButton>
        <CButton href='/admin/categories' size='lg' className='w-auto'>
          Tambah Kategori
        </CButton>
      </div>
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
            Ada {vouchers?.length || 0} voucher yang sudah kamu tambahkan
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
        <TableOrders orders={orders} />
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
        <TableProducts products={products} />
      </div>
      {/* List Customer */}
      <div className='my-5'>
        <div className='title mb-3'>
          <h5 className='fw-bold'>Daftar Pelanggan</h5>
          <Link href='/admin/customers'>
            <a>
              <h5 className='showpage'>Lihat semua {'>'}</h5>
            </a>
          </Link>
        </div>
        <TableCustomers customers={customers} vouchers={vouchers} />
      </div>
    </CContainer>
  )
}

export default Dashboard
