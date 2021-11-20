import { CModal } from '@coreui/react'
import { ReactNode, useState } from 'react'

interface props {
  children: ReactNode
  visible: boolean
  setVisible: (value: boolean) => void
}
const Modal = ({ children, visible, setVisible }: props) => {
  return (
    <CModal
      className='p-5'
      visible={visible}
      alignment='center'
      onClose={() => setVisible(false)}
      style={{ borderRadius: 20 }}
    >
      <div className=''>{children}</div>
    </CModal>
  )
}

export default Modal
