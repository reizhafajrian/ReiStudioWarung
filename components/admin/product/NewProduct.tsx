import { useMemo, useState } from 'react'
import Image from 'next/image'
import { CButton, CContainer, CForm, CFormInput } from '@coreui/react'
import InputField from '../../InputField'
import { Post } from 'utils/axios'
import { useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import Select from 'react-select'

const NewProduct = ({ categories }: any) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [nama, setNama] = useState('')
  const [beli, setBeli] = useState('')
  const [jual, setJual] = useState('')
  const [sewa, setSewa] = useState('')
  const [stok, setStok] = useState('')
  const [foto, setFoto] = useState('')
  const [kat, setKat] = useState('')
  const [createObjectURL, setCreateObjectURL] = useState('')

  let listKategori: any = []

  categories.map((c: any) => {
    listKategori = [...listKategori, { value: c.name, label: c.name }]
  })

  const options = useMemo(() => listKategori, [])

  const check =
    nama.length > 0 &&
    beli.length > 0 &&
    jual.length > 0 &&
    stok.length > 0 &&
    kat.length > 0

  const handlePost = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })

      const data = new FormData()
      data.append('name', nama)
      data.append('category', kat)
      data.append('image', foto)
      data.append('buying_price', beli)
      data.append('selling_price', jual)
      data.append('stock', stok)
      sewa ? data.append('renting_price', sewa) : undefined

      Post('/admin/products', data, 'form-data').then((res: any) => {
        dispatch({
          type: 'LOADING',
          payload: false,
        })
        if (res.status === 201) {
          dispatch({
            type: 'SETALERT',
            isVisible: true,
            color: 'success',
            message: res.message,
          })
          router.push('/admin/products')
        } else {
          dispatch({
            type: 'SETALERT',
            isVisible: true,
            color: 'danger',
            message: res.error,
          })
        }
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

  const handleCategory = (cat: any) => {
    setKat(cat.value)
  }

  const setUploadFoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file: any = e.target.files[0]
      setFoto(file)
      setCreateObjectURL(URL.createObjectURL(file))
    }
  }

  return (
    <CContainer className='my-5'>
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
            <div className='mb-3'>
              <label className='h6 fw-bold mb-3'>Kategori</label>
              <Select
                className='top'
                classNamePrefix='inner'
                options={options}
                placeholder='pilih kategori'
                onChange={handleCategory}
              />
            </div>
          </div>
          <div className='my-auto product-form'>
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
            {kat === 'Tabung Gas' && (
              <InputField
                type='number'
                label='Harga Sewa'
                placeholder='Harga sewa'
                onChange={setSewa}
                value={sewa}
                id='sewa'
              />
            )}
          </div>
          <div className='my-auto product-form'>
            {createObjectURL && (
              <>
                <Image
                  src={createObjectURL}
                  alt='img-preview'
                  width={200}
                  height={200}
                />
                <br />
              </>
            )}
            <label className='h6 fw-bold mb-3' htmlFor='foto'>
              Foto Barang
            </label>
            <CFormInput
              type='file'
              placeholder='Foto Barang'
              onChange={setUploadFoto}
              name='image'
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
