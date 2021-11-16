import Card from './Card'
import Image from 'next/image'
import Button from './Button'

interface props {
  image: string
  name: string
  price: number
  sold: number
}

const ProductItem = ({ image, name, price, sold }: props) => {
  return (
    <div style={{ maxWidth: 200 }}>
      <Card>
        <div>
          <Image
            className='product-img'
            src={image}
            alt={name}
            width={200}
            height={200}
          />
        </div>
        <div className='p-3 pt-2'>
          <p className='fw-bold lh-lg mb-2'>{name}</p>
          <div className='w-100 d-flex justify-content-between'>
            <div>
              <p className='mb-1 fw-medium' style={{ fontSize: '0.75rem' }}>
                Rp. {price.toLocaleString('id-ID')}
                ,-
              </p>
              <p className='text-secondary mb-0'>
                <small>
                  Dibeli
                  <span className='text-primary'> {sold} </span>kali
                </small>
              </p>
            </div>
            <div>
              <Button
                title='Beli'
                style='bg-dark text-white px-3 py-2'
                borderRadius='8px'
                path='/belanja'
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default ProductItem
