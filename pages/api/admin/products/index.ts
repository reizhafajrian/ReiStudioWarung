import nc from 'next-connect'
import multer from 'multer'
import { onError, onNoMatch } from '@backend/middlewares/errorHandler'
import connectDB from '@backend/app'
import { ProductController } from '@backend/controllers/ProductController'

export const config = {
  api: {
    bodyParser: false,
  },
}

const fileStorage = multer.diskStorage({
  destination: (req: any, file: any, cb: any) => {
    cb(null, 'public/uploads')
  },
  filename: (req: any, file: any, cb: any) => {
    cb(null, new Date().getTime() + '-' + file.originalname)
  },
})
const fileFilter = (req: any, file: any, cb: any) => {
  if (
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/jpg' ||
    file.mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
  }
}

const upload = multer({
  storage: fileStorage,
  fileFilter: fileFilter,
})

export default connectDB(
  nc({ onError, onNoMatch })
    .get(ProductController.getProductDetails)
    .delete(ProductController.delete)
    .use(upload.single('image'))
    .post(ProductController.create)
    .put(ProductController.update)
)
