import { useMemo, useState } from 'react'
import Select from 'react-select'
import ProductItem from '../components/product/ProductItem'
import { BiSearchAlt2 } from 'react-icons/bi'
import {
  CButton,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CRow,
} from '@coreui/react'
import products from '../data/products'

const Products = () => {
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

  const category = [
    'Sembako',
    'Makanan',
    'Minuman',
    'Bumbu Masakan',
    'Keperluan Bayi',
    'Keperluan Wanita',
    'Kesehatan',
    'Lain-lain',
  ]

  const [product, setProduct] = useState('')

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(product)
    setProduct(e.target.value)
  }

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
        {category.map((kat, index) => (
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
          <CForm className='d-flex'>
            <CFormInput
              className='w-75 rounded-0 rounded-start'
              type='text'
              placeholder='Cari produk'
              value={product}
              onChange={handleSearchChange}
            />
            <CButton type='submit' className='rounded-0 rounded-end'>
              <BiSearchAlt2 size={24} />
            </CButton>
          </CForm>
        </div>
        <CRow className='mt-5 w-100'>
          {products.map((product) => (
            <CCol
              xs={3}
              className='mb-5 p-0 d-flex justify-content-center'
              key={product.slug}
            >
              <ProductItem
                image={product.image}
                name={product.name}
                price={product.sellingPrice}
                sold={product.sold}
              />
            </CCol>
          ))}
        </CRow>
        <div className='w-100 text-center mb-5'>
          <CButton className='mb-5' style={{ width: 180 }}>
            Muat lebih banyak
          </CButton>
        </div>
      </div>
    </div>
  )
}

export default Products
