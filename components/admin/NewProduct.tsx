import { useState } from 'react'
import { CButton, CContainer, CForm } from '@coreui/react'
import InputField from '../InputField'

const NewProduct = () => {
  const [nama, setNama] = useState('')
  const [beli, setBeli] = useState('')
  const [jual, setJual] = useState('')
  const [stok, setStok] = useState('')
  const [foto, setFoto] = useState('')
  const [kat, setKat] = useState('')
  const [tambahKat, setTambahKat] = useState('')

  return (
    <CContainer className='my-5'>
      <h4 className='fw-bold mb-4'>Tambah Product</h4>
      <CForm className='bg-white p-5' style={{ borderRadius: 20 }}>
        <div className='pb-3 d-flex justify-content-between'>
          <div>
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
          <div>
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
          <div className='my-auto'>
            click here
            <InputField
              type='file'
              // label='Foto Barang'
              placeholder='Foto barang'
              onChange={setFoto}
              value={foto}
              id='foto'
            />
          </div>
        </div>
        <div className='text-center'>
          <CButton className='w-auto' size='lg'>
            Tambah produk
          </CButton>
        </div>
      </CForm>
    </CContainer>
  )
}

export default NewProduct
