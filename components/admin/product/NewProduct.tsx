import { useState } from 'react'
import { CButton, CContainer, CForm } from '@coreui/react'
import InputField from '../../InputField'
import { Post } from 'utils/axios'
import { useDispatch, useSelector } from 'react-redux'
// import FlashMessage from 'react-flash-message'

const NewProduct = () => {
  const [nama, setNama] = useState('')
  const [beli, setBeli] = useState('')
  const [jual, setJual] = useState('')
  const [stok, setStok] = useState('')
  const [foto, setFoto] = useState('')
  const [kat, setKat] = useState('')
  const [tambahKat, setTambahKat] = useState('')
  const dispatch = useDispatch()
  const state = useSelector((state) => state)
  const check =
    nama.length > 0 &&
    beli.length > 0 &&
    jual.length > 0 &&
    stok.length > 0 &&
    foto.length > 0 &&
    tambahKat.length > 0

  const handlePost = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })
      Post('/products', {
        name: nama,
        category: tambahKat,
        image: foto,
        buying_price: beli,
        selling_price: jual,
        stock: stok,
      }).then((res) => {
        dispatch({
          type: 'LOADING',
          payload: false,
        })
      })
      dispatch({
        type: 'SETALERT',
        isVisible: true,
        color: 'success',
        message: 'Berhasil menambahkan barang',
      })
    } else {
      dispatch({
        type: 'SETALERT',
        isVisible: true,
        color: 'danger',
        message: 'Harap Isi Semua Form',
      })
    }
  }

  return (
    <CContainer className='my-5'>
      {/* <FlashMessage duration={5000} persistOnHover={true}>
        <p>Message</p>
      </FlashMessage> */}
      <h4 className='fw-bold mb-4'>Tambah Product</h4>
      <CForm className='bg-white p-5' style={{ borderRadius: 20 }}>
        <div className='pb-3 d-flex justify-content-between flex-wrap'>
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
            {/* <InputField
              type="text"
              label="Kategori"
              placeholder="Kategori"
              onChange={setKat}
              value={kat}
              id="kat"
            /> */}
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
          <CButton
            className='w-auto'
            size='lg'
            onClick={(e) => {
              e.preventDefault()
              handlePost()
            }}
          >
            Tambah produk
          </CButton>
        </div>
      </CForm>
    </CContainer>
  )
}

export default NewProduct
