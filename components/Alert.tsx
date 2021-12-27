import { CAlert } from '@coreui/react'
import { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'

const Alert = () => {
  const state = useSelector((state: RootStateOrAny) => state)
  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'SETALERT', isVisible: false })
    }, 5000)
  }, [])

  return (
    <div className='alert'>
      <CAlert color={state.alert.color}>{state.alert.message}</CAlert>
    </div>
  )
}

export default Alert
