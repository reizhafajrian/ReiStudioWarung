import Link from 'next/link'
import { CButton } from '@coreui/react'

interface props {
  title: string
  style: string
  borderRadius: string
  padding?: string
  path: string
}
export default function Button({
  title,
  style,
  borderRadius,
  padding,
  path,
}: props) {
  return (
    <Link href={path} passHref>
      <CButton
        className={`${style} border-0`}
        style={{
          borderRadius: `${borderRadius}`,
          padding: `${padding}`,
        }}
      >
        {title}
      </CButton>
    </Link>
  )
}
