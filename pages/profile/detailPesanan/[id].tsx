import { CCol, CContainer, CRow } from '@coreui/react'
import type { ReactElement } from 'react'
import AlertStatus from '../../../components/AlertStatus'
import Card from '../../../components/Card'
import Layout from '../../../components/Layout'

const DetailPesanan = () => {
  return (
    <CContainer className='p-0 mt-5'>
      <h3 className='fw-bold mb-5'>Detail Pesanan</h3>
      <CRow className='mx-5'>
        <CCol sm={8} className='p-0 pe-5'>
          <AlertStatus status={3} />
          <Card style='p-5'>Product items</Card>
        </CCol>
        <CCol className='p-0 ps-4'>
          <Card style='p-5'>detail pemesanan</Card>
        </CCol>
      </CRow>
    </CContainer>
  )
}

export default DetailPesanan

DetailPesanan.getLayout = function getLayout(content: ReactElement) {
  return (
    <Layout isCustomer={true} footerOff={true}>
      {content}
    </Layout>
  )
}
