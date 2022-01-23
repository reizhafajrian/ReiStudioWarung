import { useMemo, useState } from 'react'
import { CButton, CContainer, CForm, CFormInput } from '@coreui/react'
import InputField from '../../InputField'
import { useDispatch } from 'react-redux'
import { Put } from 'utils/axios'
import { useRouter } from 'next/router'
import Select from 'react-select'
import Image from 'next/image'

const UpdateProduct = ({ product, categories }: any) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [nama, setNama] = useState(product.name)
  const [beli, setBeli] = useState(product.buying_price)
  const [jual, setJual] = useState(product.selling_price)
  const [sewa, setSewa] = useState(product.renting_price)
  const [stok, setStok] = useState(product.stock)
  const [foto, setFoto] = useState('')
  const [kat, setKat] = useState(product.category)
  const [createObjectURL, setCreateObjectURL] = useState(product.image)

  let listKategori: any = []

  categories.map((c: any) => {
    listKategori = [...listKategori, { value: c.name, label: c.name }]
  })

  const options = useMemo(() => listKategori, [])

  const check =
    nama.length > 0 &&
    beli !== null &&
    jual !== null &&
    stok !== null &&
    kat.length > 0

  const handlePut = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })

      const data = new FormData()
      data.append('name', nama)
      data.append('category', kat)
      foto && data.append('image', foto)
      data.append('buying_price', beli)
      data.append('selling_price', jual)
      data.append('stock', stok)
      sewa ? data.append('renting_price', sewa) : undefined

      Put(`/admin/products?id=${router.query.pid}`, data, 'form-data').then(
        (res: any) => {
          dispatch({
            type: 'LOADING',
            payload: false,
          })
          if (res.status === 200) {
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
        }
      )
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
            <div className='mb-3'>
              <label className='h6 fw-bold mb-3'>Kategori</label>
              <Select
                className='top'
                classNamePrefix='inner'
                options={options}
                placeholder={kat}
                onChange={handleCategory}
                value={kat}
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
            onClick={(e) => {
              e.preventDefault()
              handlePut()
            }}
            className='w-auto'
            size='lg'
          >
            Update Product
          </CButton>
        </div>
      </CForm>
    </CContainer>
  )
}

export default UpdateProduct
