import { CCard } from '@coreui/react'

interface props {
  title: string
  desc: string
  width?: string
}

const ContactCard = ({ title, desc, width }: props) => {
  return (
    <CCard className='py-4 px-4 text-center mb-4 mb-md-0'>
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
  )
}

const Contact = () => {
  return (
    <div
      className='bg-light text-center'
      style={{ marginTop: '-1rem', padding: '6rem 0' }}
    >
      <h1 className='text-white fw-bold pb-4 mb-3 mb-md-5'>Kontak kami</h1>
      <div className='mx-auto w-75 d-flex flex-wrap justify-content-center justify-content-md-between'>
        <ContactCard title='Hubungi via Telepon/WhatsApp' desc='+62812552225' />
        <ContactCard
          title='Alamat'
          desc='Jalan Kuta V no. 50, Karang Baru, Jakarta Selatan'
          width='190px'
        />
        <ContactCard title='Email' desc='namawarung@gmail.com' />
      </div>
    </div>
  )
}

export default Contact
