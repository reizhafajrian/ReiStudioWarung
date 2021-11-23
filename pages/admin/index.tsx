import type { ReactElement } from 'react'
import Link from 'next/link'
import { CContainer, CLink } from '@coreui/react'
import Layout from '../../components/Layout'

const Dashboard = () => {
  return (
    <CContainer className='p-0'>
      {/* LAPORAN PESANAN */}
      <div className='pt-3 mt-4'>
        <div className='d-flex justify-content-between'>
          <h4 className='fw-bold'>Laporan Pesanan</h4>
          <Link href='' passHref>
            <CLink>
              <h4>Lihat semua {'>'}</h4>
            </CLink>
          </Link>
        </div>
      </div>
      {/* KELOLA VOUCHER */}
      <div className='pt-3 mt-4'>
        <h4 className='fw-bold'>Kelola Voucher</h4>
      </div>
      {/* PESANAN BERLANGSUNG*/}
      <div className='pt-3 mt-4'>
        <div className='d-flex justify-content-between'>
          <h4 className='fw-bold'>Pesanan Sedang Berlangsung</h4>
          <Link href='' passHref>
            <CLink>
              <h4>Lihat semua {'>'}</h4>
            </CLink>
          </Link>
        </div>
      </div>
      {/* PERSEDIAAN PRODUK */}
      <div className='pt-3 mt-4'>
        <div className='d-flex justify-content-between'>
          <h4 className='fw-bold'>Persediaan Produk</h4>
          <Link href='' passHref>
            <CLink>
              <h4>Lihat semua {'>'}</h4>
            </CLink>
          </Link>
        </div>
      </div>
    </CContainer>
  )
}

export default Dashboard

Dashboard.getLayout = function getLayout(content: ReactElement) {
  return <Layout isAdmin={true}>{content}</Layout>
}
