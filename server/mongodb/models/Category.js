import mongoose from 'mongoose'

const CategorySchema = new mongoose.Schema(
  {
    title: { type: String, required: true }
  },
  { timestamps: true }
)

const categoryModel = mongoose.model('Category', CategorySchema)

export default categoryModel
