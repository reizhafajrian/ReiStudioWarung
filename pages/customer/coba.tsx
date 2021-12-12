import { useEffect } from 'react'
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../redux/actions/productActions'

const Coba = () => {
  const dispatch = useDispatch()

  const { products } = useSelector((state: RootStateOrAny) => state.product)

  useEffect(() => {
    dispatch(getProducts())
  }, [dispatch])

  console.log(products)

  return (
    <div>
      <h1>data succesfully rendered</h1>
      <ul>
        {products.map((p) => (
          <li key={p._id}>{p.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Coba
