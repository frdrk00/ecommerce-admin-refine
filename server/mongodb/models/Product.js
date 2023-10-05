import mongoose from 'mongoose'

const ProductSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
  },
  { timestamps: true }
)

const productModel = mongoose.model('Product', ProductSchema)

export default productModel
