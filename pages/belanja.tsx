import type { ReactElement } from 'react'
import Layout from '../components/Layout'
import { CFormCheck } from '@coreui/react'
import { useMemo, useState } from 'react'
import Select from 'react-select'
import InputSearch from '../components/InputSearch'
import ProductItem from '../components/ProductItem'
import Button from '../components/Button'
import { kategori } from '../utils/data'

const Belanja = () => {
  const options = useMemo(
    () => [
      { value: 'terlaris', label: 'Terlaris' },
      { value: 'hargaTerendah', label: 'Harga Terendah' },
      { value: 'hargaTertinggi', label: 'Harga Tertinggi' },
      { value: 'a-z', label: 'A-Z' },
      { value: 'z-a', label: 'Z-A' },
    ],
    []
  )

  const [value, setValue] = useState('')

  return (
    <div className='d-flex mt-5'>
      {/* -------SIDEBAR MENU------- */}
      <div
        className='bg-white p-4 me-5'
        style={{
          width: 314,
          height: 'fit-content',
          boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
          borderRadius: '0px 20px 20px 0px',
        }}
      >
        <h5 className='fw-bold mb-3'>Urutkan</h5>
        <Select
          className='top'
          classNamePrefix='inner'
          options={options}
          placeholder='-Urutkan-'
        />
        <h5 className='fw-bold pt-2 mt-2 mb-3'>Kategori</h5>
        {kategori.map((kat, index) => (
          <CFormCheck
            className='mb-2 fw-medium'
            type='radio'
            name='kategori'
            id={kat}
            label={kat}
            key={index}
          />
        ))}
      </div>

      {/* -------PRODUCT LIST------- */}
      <div className='w-100 me-5 pe-5'>
        <div className='w-100 d-flex align-items-center justify-content-between'>
          <h4 className='fw-bold me-auto'>Semua Produk</h4>
          <InputSearch
            value={value}
            onChange={setValue}
            placeholder='Cari Produk'
          />
        </div>
        <div className='w-100 my-5'>
          <ProductItem
            image='https://picsum.photos/200'
            name='Beras Subang 2kg'
            price={30000}
            sold={20}
          />
        </div>
        <div className='w-100 text-center mb-5'>
          <Button
            title='Muat lebih banyak'
            style='bg-dark text-white px-3 py-2 mb-5'
            borderRadius='12px'
            path='/belanja'
          />
        </div>
      </div>
    </div>
  )
}

export default Belanja

Belanja.getLayout = function getLayout(content: ReactElement) {
  return <Layout>{content}</Layout>
}
