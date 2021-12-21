import React, { useState, useMemo, BaseSyntheticEvent } from 'react'
import Select from 'react-select'
import filterSearch from '../../utils/filterSearch'
import { useRouter } from 'next/router'
import { CFormCheck } from '@coreui/react'

const Filter = () => {
  const [sort, setSort] = useState()
  const [category, setCategory] = useState('')

  const router = useRouter()

  const handleCategory = (e: BaseSyntheticEvent) => {
    setCategory(e.target.value)
    filterSearch({ router, category: e.target.value })
  }

  const handleSort = (sortBy: any) => {
    setSort(sortBy)
    filterSearch({ router, sort: sortBy.value })
  }

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

  const categories = [
    'Sembako',
    'Makanan',
    'Minuman',
    'Bumbu Masakan',
    'Keperluan Bayi',
    'Keperluan Wanita',
    'Kesehatan',
    'Lain-lain',
  ]

  return (
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
        value={sort}
        onChange={handleSort}
      />
      <h5 className='fw-bold pt-2 mt-2 mb-3'>Kategori</h5>
      {categories.map((kat, index) => (
        <CFormCheck
          className='mb-2 fw-medium'
          type='radio'
          name='kategori'
          id={kat}
          label={kat}
          key={index}
          value={kat}
          onChange={handleCategory}
        />
      ))}
    </div>
  )
}

export default Filter
