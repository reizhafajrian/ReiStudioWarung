import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductItem from './product/ProductItem'
import { CForm, CFormInput, CButton } from '@coreui/react'
import { BiSearchAlt2 } from 'react-icons/bi'

const Home = ({ products }) => {
  const [product, setProduct] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(product)
    setProduct(e.target.value)
  }

  return (
    <div>
      {/* --------JUMBOTRON-------- */}
      <div
        className='bg-white d-flex align-items-center justify-content-center py-5 mb-4'
        style={{ marginTop: '-1rem' }}
      >
        <Image
          src='/images/animate.jpg'
          alt='background img'
          width='492.43'
          height='360'
          objectFit='contain'
        />
        <div>
          <h1 className='fw-bold mb-4'>Belanja mudah dari rumah!</h1>
          <h3 className='text-secondary mb-4'>
            Kini pesan barang dari [nama warung] gak
            <br /> perlu keluar rumah lagi
          </h3>
          <CForm className='d-flex'>
            <CFormInput
              className='w-50 ms-1 rounded-0 rounded-start'
              type='text'
              placeholder='Belanja apa hari ini?'
              value={product}
              onChange={handleSearchChange}
            />
            <CButton type='submit' className='rounded-0 rounded-end'>
              <BiSearchAlt2 size={24} />
            </CButton>
          </CForm>
        </div>
      </div>

      {/* --------PRODUCT TERLARIS-------- */}
      <div className='bg-white d-flex flex-column align-items-center py-5 mb-4 px-5'>
        <div className='w-100 mb-5 position-relative'>
          <h2 className='fw-bold m-0 text-center'>Paling Laris</h2>
          <div className='position-absolute end-0 top-0 pt-2 px-5'>
            <a href='/products'>Lihat semua {'>'}</a>
          </div>
        </div>
        {/* Product List */}
        <div className='w-100 d-flex justify-content-evenly'>
          {products.slice(0, 5).map((product: any) => (
            <ProductItem
              key={product._id}
              image={product.image}
              name={product.name}
              price={product.selling_price}
              sold={product.sold}
            />
          ))}
        </div>
      </div>

      {/* --------CARA MEMESAN-------- */}
      <div className='bg-white d-flex flex-column align-items-center py-5 mb-4 px-5'>
        <h2 className='fw-bold mb-5 text-center'>Cara Memesan</h2>
        <div className='w-100 px-5 position-relative'>
          <div className='w-100 d-flex justify-content-between pb-5'>
            <Step num={1} desc='Pilih barang yang kamu inginkan' />
            <Step num={2} desc='Periksa kembali barang belanjamu' />
            <Step num={3} desc='Pilih metode pembayaran' />
            <Step num={4} desc='Kami antarkan belanjaanmu!' />
          </div>
          <div
            className='position-absolute bg-light start-0 end-0 mx-auto'
            style={{
              height: 10,
              width: '80%',
              top: '18%',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

// order step component
const Step = (props: any) => {
  return (
    <div
      className='d-flex flex-column align-items-center'
      style={{ maxWidth: 230, zIndex: 100 }}
    >
      <div className='w-100 d-flex align-items-center justify-content-center'>
        <div
          className='bg-light p-5 d-flex align-items-center justify-content-center'
          style={{ borderRadius: '50%', maxWidth: 100, maxHeight: 100 }}
        >
          <h1 className='m-0'>{props.num}</h1>
        </div>
      </div>
      <h4 className='text-center text-gray mt-4'>{props.desc}</h4>
    </div>
  )
}

export default Home
