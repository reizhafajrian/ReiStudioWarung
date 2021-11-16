import { ReactNode } from 'react'
import { CCard } from '@coreui/react'

interface props {
  children: ReactNode
  style?: string
}
const Card = ({ children, style }: props) => {
  return (
    <CCard
      className={`${style} border-0`}
      style={{
        borderRadius: 20,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      }}
    >
      {children}
    </CCard>
  )
}

export default Card
