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
    const products = await Product.find()

    if (products.length > 0) {
      res.status(200).json(products)
    } else {
      res.status(200).json({
        status: 200,
        message: 'Products is not available',
      })
    }
  },
}
