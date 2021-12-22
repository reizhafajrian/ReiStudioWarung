import {
  CDropdown,
  CDropdownItemPlain,
  CDropdownMenu,
  CDropdownToggle,
  CFormCheck,
} from '@coreui/react'
import { BaseSyntheticEvent } from 'react'
import { CgMenuGridR } from 'react-icons/cg'

const FilterOrder = () => {
  const status = [
    'Pembayaran',
    'Pembayaran diterima',
    'Dalam pengiriman',
    'Komplain',
    'Selesai',
  ]

  const paymentMethod = ['Transfer', 'COD']

  const handleStatus = (e: BaseSyntheticEvent) => {
    console.log(e.target.value)
  }

  const handlePayment = (e: BaseSyntheticEvent) => {
    console.log(e.target.value)
  }

  return (
    <CDropdown>
      <CDropdownToggle className='w-auto d-flex align-items-center justify-content-center'>
        <CgMenuGridR size='24' />
        <p className='m-0 ms-2'>Filter</p>
      </CDropdownToggle>
      <CDropdownMenu>
        <CDropdownItemPlain>
          <p className='fw-bold'>Status</p>
          {status.map((s, index) => (
            <CFormCheck
              className='mb-2 fw-medium'
              type='radio'
              name='status'
              id={s}
              label={s}
              key={index}
              value={s}
              onChange={handleStatus}
            />
          ))}
        </CDropdownItemPlain>
        <CDropdownItemPlain style={{ width: 220 }}>
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
        </CDropdownItemPlain>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default FilterOrder
