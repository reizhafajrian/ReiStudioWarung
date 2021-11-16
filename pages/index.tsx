import type { ReactElement } from 'react'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import SearchInput from '../components/InputSearch'
import ProductItem from '../components/ProductItem'
import { CLink } from '@coreui/react'

interface props {
  num: number
  desc: string
}

const Step = ({ num, desc }: props) => {
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
          <h1 className='m-0'>{num}</h1>
        </div>
      </div>
      <h4 className='text-center text-gray mt-5'>{desc}</h4>
    </div>
  )
}

import Layout from '../components/Layout'

const Home = () => {
  const [product, setProduct] = useState('')

  return (
    <div>
      {/* --------JUMBOTRON-------- */}
      <div
        className='bg-white d-flex align-items-center justify-content-center mb-4'
        style={{ marginTop: '-1rem', padding: '4rem 0' }}
      >
        <Image
          src='/animate.jpg'
          alt='background img'
          width='500'
          height='360'
        />
        <div>
          <h1 className='fw-bold mb-4'>Belanja mudah dari rumah!</h1>
          <h3 className='text-secondary pb-2 mb-4'>
            Kini pesan barang dari [nama warung] gak
            <br /> perlu keluar rumah lagi
          </h3>
          <SearchInput
            onChange={setProduct}
            value={product}
            placeholder='Belanja apa hari ini?'
          />
        </div>
      </div>

      {/* --------PRODUCT TERLARIS-------- */}
      <div className='bg-white d-flex flex-column align-items-center py-4 mb-4'>
        <div className='w-100 pb-4 mt-3 mb-5 position-relative'>
          <h2 className='fw-bold m-0 text-center'>Paling Laris</h2>
          <div className='position-absolute end-0 top-0 p-2 me-4'>
            <Link href='/' passHref>
              <CLink>Lihat semua {'>'}</CLink>
            </Link>
          </div>
        </div>
        {/* Product List */}
        <div className='pb-5 mb-5'>
          <ProductItem
            image='https://picsum.photos/200'
            name='Beras Subang 2kg'
            price={30000}
            sold={20}
          />
        </div>
      </div>

      {/* --------CARA MEMESAN-------- */}
      <div className='bg-white d-flex flex-column align-items-center py-4 mb-4 px-5'>
        <h2 className='fw-bold pb-4 mt-3 mb-5 text-center'>Cara Memesan</h2>
        <div className='w-100 px-5 pb-5 position-relative'>
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
              top: '16%',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(content: ReactElement) {
  return <Layout>{content}</Layout>
}
