import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'

const Coba = () => {
  const dispatch = useDispatch()

  const { products } = useSelector((state: RootStateOrAny) => state.product)

  dispatch(getProducts())

  console.log(products)

  return <div>{products}</div>
}

export default Coba
