import { CSpinner } from '@coreui/react'
import React from 'react'

export default function Loading() {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        bottom: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'antiquewhite',
        opacity: 0.5,
        zIndex: 13,
      }}
    >
      <CSpinner color='primary' />
    </div>
  )
}
