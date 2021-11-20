import Link from 'next/link'
import { CButton } from '@coreui/react'

interface props {
  title: string
  style: string
  isBtnSubmit?: boolean
  borderRadius: string
  width?: string
  path?: string
  onClick?: () => void
}
const Button = ({
  title,
  style,
  isBtnSubmit,
  borderRadius,
  width,
  path,
  onClick,
}: props) => {
  return (
    <Link href={path ? path : ''} passHref>
      <CButton
        className={style}
        style={{
          borderRadius: `${borderRadius}`,
          width: `${width}`,
        }}
        onClick={onClick}
        type={isBtnSubmit ? 'submit' : 'button'}
      >
        {title}
      </CButton>
    </Link>
  )
}

export default Button
