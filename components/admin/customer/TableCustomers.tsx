import {
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CButton,
  CPopover,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from '@coreui/react'
import { FiSend } from 'react-icons/fi'
import { useDispatch } from 'react-redux'
import { Post } from 'utils/axios'

const TableCustomers = ({ customers, vouchers, result }: any) => {
  const dispatch = useDispatch()
  const headers = [
    'Nama',
    'Username',
    'Email',
    'Telepon',
    'Alamat',
    'Kirim Voucher',
  ]

  const handlePost = (customer: any, voucher: any) => {
    dispatch({
      type: 'LOADING',
      payload: true,
    })
    console.log(customer, voucher)

    Post('/admin/vouchers/email', {
      name: customer.name,
      email: customer.email,
      code: voucher.code,
      amount: voucher.amount.toLocaleString('id-ID'),
    }).then((res: any) => {
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
      } else {
        dispatch({
          type: 'SETALERT',
          isVisible: true,
          color: 'danger',
          message: res.message,
        })
      }
    })
  }

  return (
    <div className='mt-4'>
      <CTable borderless hover responsive>
        <CTableHead className='h6 bg-white'>
          <CTableRow>
            {headers.map((title, index) => (
              <CTableHeaderCell
                key={index}
                className='px-3 py-4 border-0 align-middle'
              >
                {title}
              </CTableHeaderCell>
            ))}
          </CTableRow>
        </CTableHead>
        <CTableBody className='h6 bg-white py-4 align-middle'>
          {customers
            ?.slice(result <= 6 ? 0 : result - 6, customers.length)
            .map((c: any) => (
              <CTableRow style={{ cursor: 'pointer' }} key={c._id}>
                <CTableDataCell className='text-capitalize'>
                  {c.name}
                </CTableDataCell>
                <CTableDataCell>{c.username}</CTableDataCell>
                <CTableDataCell>{c.email}</CTableDataCell>
                <CTableDataCell>{c.phone}</CTableDataCell>
                <CPopover content={c.address} placement='top' trigger='hover'>
                  <CTableDataCell>
                    <p className='m-0 text-truncate' style={{ maxWidth: 200 }}>
                      {c.address}
                    </p>
                  </CTableDataCell>
                </CPopover>
                <CTableDataCell className='text-center'>
                  <CDropdown>
                    <CDropdownToggle color='dark'>
                      <FiSend color='white' size='24' />
                    </CDropdownToggle>
                    <CDropdownMenu>
                      {vouchers.map((v: any) => (
                        <CDropdownItem key={v._id}>
                          <div onClick={() => handlePost(c, v)}>{v.code}</div>
                        </CDropdownItem>
                      ))}
                    </CDropdownMenu>
                  </CDropdown>
                </CTableDataCell>
              </CTableRow>
            ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default TableCustomers
