import {
  CDropdown,
  CDropdownItemPlain,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
} from '@coreui/react'
import { useRouter } from 'next/router'
import { BaseSyntheticEvent } from 'react'
import { CgMenuGridR } from 'react-icons/cg'
import filterSearch from 'utils/filterSearch'

const FilterOrder = () => {
  const router = useRouter()
  const status = [
    { label: 'Pembayaran', value: 'pembayaran' },
    { label: 'Pembayaran diterima', value: 'sedang diproses' },
    { label: 'Dalam pengiriman', value: 'sedang dikirim' },
    { label: 'Komplain', value: 'komplain' },
    { label: 'Komplain diproses', value: 'komplain diproses' },
    { label: 'Selesai', value: 'selesai' },
  ]

  // const paymentMethod = ['Transfer', 'COD']

  const handleStatus = (e: BaseSyntheticEvent) => {
    filterSearch({ router, status: e.target.value })
  }

  // const handlePayment = (e: BaseSyntheticEvent) => {
  //   console.log(e.target.value)
  // }

  return (
    <CDropdown>
      <CDropdownToggle className='w-auto d-flex align-items-center justify-content-center'>
        <CgMenuGridR size='24' />
        <p className='m-0 ms-2'>Filter</p>
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItemPlain style={{ width: 220 }}>
          <p className='fw-bold'>Status</p>
          {status.map((s, index) => (
            <CFormCheck
              className='mb-2 fw-medium'
              type='radio'
              name='status'
              id={s.label}
              label={s.label}
              key={index}
              value={s.value}
              onChange={handleStatus}
            />
          ))}
        </CDropdownItemPlain>
        {/* <CDropdownItemPlain style={{ width: 220 }}>
          <p className='fw-bold'>Metode Pembayaran</p>
          {paymentMethod.map((p, index) => (
            <CFormCheck
              className='mb-2 fw-medium'
              type='radio'
              name='payment'
              id={p}
              label={p}
              key={index}
              value={p}
              onChange={handlePayment}
            />
          ))}
        </CDropdownItemPlain> */}
      </CDropdownMenu>
    </CDropdown>
  )
}

export default FilterOrder
