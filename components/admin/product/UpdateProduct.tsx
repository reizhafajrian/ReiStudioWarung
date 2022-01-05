import { useMemo, useState } from 'react'
import { CButton, CContainer, CForm } from '@coreui/react'
import InputField from '../../InputField'
import { useDispatch } from 'react-redux'
import { Post, Put } from 'utils/axios'
import { useRouter } from 'next/router'
import Select from 'react-select'

const UpdateProduct = ({ product, categories }: any) => {
  const dispatch = useDispatch()
  const router = useRouter()
  const [nama, setNama] = useState(product.name)
  const [beli, setBeli] = useState(product.buying_price)
  const [jual, setJual] = useState(product.selling_price)
  const [sewa, setSewa] = useState(product.renting_price)
  const [stok, setStok] = useState(product.stock)
  const [foto, setFoto] = useState(product.image)
  const [kat, setKat] = useState(product.category)
  const [tambahKat, setTambahKat] = useState('')

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
    foto.length > 0 &&
    (kat.length > 0 || tambahKat.length > 0)

  let data: any = {
    name: nama,
    category: tambahKat ? tambahKat : kat,
    image: foto,
    buying_price: beli,
    selling_price: jual,
    stock: stok,
  }
  sewa ? (data.renting_price = sewa) : undefined

  const handlePut = () => {
    if (check) {
      dispatch({
        type: 'LOADING',
        payload: true,
      })
      Put(`/admin/products?id=${router.query.pid}`, data).then((res: any) => {
        if (tambahKat) {
          Post('/products/categories', { name: tambahKat })
        }
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
