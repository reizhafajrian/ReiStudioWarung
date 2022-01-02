import mongoose from 'mongoose'

const voucherSchema = new mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

const Voucher =
  mongoose.models.Voucher || mongoose.model('Voucher', voucherSchema)

export default Voucher
