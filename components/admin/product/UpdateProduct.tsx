import { useState } from 'react'
import { CButton, CContainer, CForm } from '@coreui/react'
import InputField from '../../InputField'

const UpdateProduct = () => {
  const product = {
    id: '1234',
    name: 'Beras Subang 2kg',
    stock: '20',
    buyingPrice: 'Rp. 35.000,-',
    sellingPrice: 'Rp. 35.000,-',
    category: 'Sembako',
    lastUpdated: '24/07/21',
  }

  const [nama, setNama] = useState(product.name)
  const [beli, setBeli] = useState(product.buyingPrice)
  const [jual, setJual] = useState(product.sellingPrice)
  const [stok, setStok] = useState(product.stock)
  const [foto, setFoto] = useState('')
  const [kat, setKat] = useState(product.category)
  const [tambahKat, setTambahKat] = useState(product.category)

  return (
    <CContainer className='my-5'>
      <h4 className='fw-bold mb-4'>Update Product</h4>
      <CForm className='bg-white p-5' style={{ borderRadius: 20 }}>
        <div className='pb-3 d-flex flex-wrap justify-content-between'>
          <div className='product-form'>
            <InputField
              type='text'
              label='Nama Barang'
              placeholder='Nama barang'
              onChange={setNama}
              value={nama}
              id='nama'
            />
            <InputField
              type='number'
              label='Harga Beli'
              placeholder='Harga beli'
              onChange={setBeli}
              value={beli}
              id='beli'
            />
            <InputField
              type='text'
              label='Kategori'
              placeholder='Kategori'
              onChange={setKat}
              value={kat}
              id='kat'
            />
          </div>
          <div className='product-form'>
            <InputField
              type='number'
              label='Jumlah Stok'
              placeholder='Jumlah stok'
              onChange={setStok}
              value={stok}
              id='stok'
            />
            <InputField
              type='number'
              label='Harga Jual'
              placeholder='Harga jual'
              onChange={setJual}
              value={jual}
              id='jual'
            />
            <InputField
              type='text'
              label='Tambah Kategori'
              placeholder='Tambah kategori'
              onChange={setTambahKat}
              value={tambahKat}
              id='tambahKat'
            />
          </div>
          <div className='my-auto product-form'>
            <InputField
              type='text'
              label='Foto Barang'
              placeholder='Foto Barang'
              onChange={setFoto}
              value={foto}
              id='foto'
            />
          </div>
        </div>
        <div className='text-center'>
          <CButton className='w-auto' size='lg'>
            Update Product
          </CButton>
        </div>
      </CForm>
    </CContainer>
  )
}

export default UpdateProduct
