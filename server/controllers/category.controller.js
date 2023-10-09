import Product from '../mongodb/models/Product.js'
import Category from '../mongodb/models/Category.js'
import * as dotenv from 'dotenv'

dotenv.config()

const getAllCategories = async (req, res) => {
  const {
    _end,
    _order,
    _start,
    _sort,
    title_like = '',
    productType = '',
  } = req.query

  const query = {}

  if (productType !== '') {
    query.productType = productType
  }

  if (title_like) {
    query.title = { $regex: title_like, $options: 'i' }
  }

  try {
    const count = await Category.countDocuments({ query })

    const categories = await Category.find(query)
      .limit(_end)
      .skip(_start)
      .sort({ [_sort]: _order })

    res.header('x-total-count', count)
    res.header('Access-Control-Expose-Headers', 'x-total-count')

    res.status(200).json(categories)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createCategory = async (req, res) => {
  try {
    const { title } = req.body

    const newCategory = new Category({
      title,
    })

    await newCategory.save()

    const { productId } = req.body
    if (productId) {
      const product = await Product.findById(productId)
      if (product) {
        product.allCategories.push(newCategory._id)
        await product.save()
      } else {
        return res.status(404).json({ message: 'Product not found' })
      }
    }

    res.status(200).json({ message: 'Category created successfully' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export { getAllCategories, createCategory }
