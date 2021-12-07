import mongoose from 'mongoose'

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    // slug: {
    //   type: String,
    //   required: true,
    //   unique: true
    // },
    category: {
      type: Array,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    buying_price: {
      type: Number,
      required: true,
    },
    selling_price: {
      type: Number,
      required: true,
    },
    sold: {
      type: Number,
      required: true,
      default: 0,
    },
    stock: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
)

const Product =
  mongoose.models.Product || mongoose.model('Product', productSchema)

export default Product
