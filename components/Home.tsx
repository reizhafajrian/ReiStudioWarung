import Image from 'next/image'
import Link from 'next/link'
import ProductItem from './product/ProductItem'
import SearchFilter from './product/SearchFilter'

const Home = ({ products }: any) => {
  return (
    <div>
      {/* --------JUMBOTRON-------- */}
      <div
        className='bg-white d-flex flex-column flex-md-row align-items-center justify-content-center py-5 mb-4'
        style={{ marginTop: '-1rem' }}
      >
        <div className='px-5 px-md-0'>
          <Image
            src='/images/animate.jpg'
            alt='background img'
            width='500'
            height='360'
            objectFit='contain'
          />
        </div>
        <div>
          <h1 className='fw-bold mb-md-4'>Belanja mudah dari rumah!</h1>
          <h3 className='text-secondary mb-4 text-responsive'>
            Kini pesan barang dari [nama warung] gak
            <br /> perlu keluar rumah lagi
          </h3>
          <div className='w-75'>
            <SearchFilter placeholder='Belanja apa hari ini?' />
          </div>
        </div>
      </div>

      {/* --------PRODUCT TERLARIS-------- */}
      <div className='bg-white d-flex flex-column align-items-center py-5 mb-4 px-5'>
        <div className='w-100 mb-5 position-relative'>
          <h2 className='fw-bold m-0 text-md-center'>Paling Laris</h2>
          <div className='position-absolute end-0 top-0 px-md-5'>
            <Link href='/customer/products?sort=terlaris'>
              <a>Lihat semua {'>'}</a>
            </Link>
          </div>
        </div>
        {/* Product List */}
        <div className='w-100 d-flex flex-wrap justify-content-evenly '>
          {products.slice(0, 5).map((product: any) => (
            <ProductItem key={product._id} product={product} />
          ))}
        </div>
      </div>

      {/* --------CARA MEMESAN-------- */}
      <div className='bg-white d-flex flex-column align-items-center py-5 mb-4 px-5'>
        <h2 className='fw-bold mb-5 text-center'>Cara Memesan</h2>
        <div className='w-100 px-md-5 position-relative'>
          <div className='w-100 d-flex flex-wrap justify-content-center justify-content-md-between pb-5'>
            <Step num={1} desc='Pilih barang yang kamu inginkan' />
            <Step num={2} desc='Periksa kembali barang belanjamu' />
            <Step num={3} desc='Pilih metode pembayaran' />
            <Step num={4} desc='Kami antarkan belanjaanmu!' />
          </div>
          <div
            className='d-none d-lg-block position-absolute bg-light start-0 end-0 mx-auto'
            style={{
              height: 10,
              width: '75%',
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
      className='d-flex flex-column align-items-center mb-4 mb-md-0'
      style={{ width: 200, zIndex: 100 }}
    >
      <div className='w-100 d-flex flex-column align-items-center justify-content-center'>
        <div
          className='bg-light p-5 d-flex align-items-center justify-content-center'
          style={{ borderRadius: '50%', maxWidth: 100, maxHeight: 100 }}
        >
          <h1 className='m-0'>{props.num}</h1>
        </div>
      </div>
      <h4 className='text-center text-gray mt-2 mt-md-4'>{props.desc}</h4>
    </div>
  )
}

export default Home
