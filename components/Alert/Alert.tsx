import { CAlert } from '@coreui/react'
import React, { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

export default function Alert() {
  const state = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()
  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'SETALERT', isVisible: false })
    }, 5000)
  }, [dispatch])
  return (
    <div className='alert'>
      <CAlert color={state.alert.color}>{state.alert.message}</CAlert>
    </div>
  )
}
