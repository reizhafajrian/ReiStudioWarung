import { CCard, CCol, CRow } from '@coreui/react'

interface props {
  title: string
  desc: string
  width?: string
}

const ContactCard = ({ title, desc, width }: props) => {
  return (
    <CCol xs='auto'>
      <CCard className='py-4 px-4 text-center mb-4 mb-md-0 mx-md-5'>
        <h5 className='text-secondary fw-bold mb-4' style={{ maxWidth: 178 }}>
          {title}
        </h5>
        <h5
          className='fw-normal'
          style={{ color: '#333333', maxWidth: `${width}` }}
        >
          {desc}
        </h5>
      </CCard>
    </CCol>
  )
}

const Contact = () => {
  return (
    <div
      className='bg-light text-center'
      style={{ marginTop: '-1rem', padding: '6rem 0' }}
    >
      <h1 className='text-white fw-bold pb-4 mb-3 mb-md-5'>Kontak kami</h1>
      <CRow className='w-100 justify-content-center mx-0'>
        <ContactCard title='Hubungi via Telepon/WhatsApp' desc='+62812552225' />
        <ContactCard
          title='Alamat'
          desc='Jalan Kuta V no. 50, Karang Baru, Jakarta Selatan'
          width='190px'
        />
        <ContactCard title='Email' desc='namawarung@gmail.com' />
      </CRow>
    </div>
  )
}

export default Contact
