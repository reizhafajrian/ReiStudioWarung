import { Request, Response, NextFunction } from 'express'
import Product from '../models/Product'
import products from '../../data/products'

export const ProductController = {
  seedProducts: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const createdProducts = await Product.insertMany(products)

    return res.status(200).json({
      status: 200,
      createdProducts,
    })
  },
  getProducts: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    let { page, limit, search, sort, category } = req.query
    let products = await Product.find()

    // Filtering
    if (search !== 'all') {
      products = products.filter((p) => p.name.toLowerCase().includes(search))
    }

    if (category !== 'all') {
      products = products.filter((p) => p.category === category)
    }

    // Sorting
    if (sort !== '') {
      if (sort === 'terlaris')
        products = products.sort((a, b) => {
          return b.sold - a.sold
        })
      if (sort === 'hargaTerendah')
        products = products.sort((a, b) => {
          return a.selling_price - b.selling_price
        })
      if (sort === 'hargaTertinggi')
        products = products.sort((a, b) => {
          return b.selling_price - a.selling_price
        })
      if (sort === 'a-z')
        products = products.sort((a, b) => a.name.localeCompare(b.name))
      if (sort === 'z-a')
        products = products.sort((a, b) => b.name.localeCompare(a.name))
    }

    // Paginating
    page = page ? page.toString() : '1'
    limit = limit ? limit.toString() : '8'

    const pageNum = parseInt(page)
    const limitNum = parseInt(limit)
    const skip = (pageNum - 1) * limitNum

    const handleLimit = (c: any) => {
      return products.filter((x, i) => {
        if (i <= c - 1) {
          return true
        }
      })
    }

    const handleSkip = (c: any) => {
      return products.filter((x, i) => {
        if (i > c - 1) {
          return true
        }
      })
    }

    products = handleSkip(skip)
    products = handleLimit(limitNum)

    if (products.length > 0) {
      res.status(200).json({
        status: 200,
        products,
        result: products.length,
      })
    } else {
      res.status(200).json({
        status: 200,
        message: 'Products is not available',
      })
    }
  },
  deleteProduct: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { id } = req.query
    const product = await Product.findById(id)

    if (!product) {
      return res.status(404).json({
        status: 404,
        message: 'Product not found with this ID.',
      })
    }

    await Product.findByIdAndRemove(id)

    return res.status(200).json({
      status: 200,
      message: 'Product is deleted.',
    })
  },
  createProduct: async function (
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { name, category, image, buying_price, selling_price, stock } =
      req.body

    const newProduct = await Product.create({
      name,
      category,
      image,
      buying_price,
      selling_price,
      stock,
    })

    return res.status(201).json({
      status: 201,
      newProduct,
    })
  },
}
