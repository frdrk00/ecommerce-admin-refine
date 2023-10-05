import Product from '../mongodb/models/Product.js'
import User from '../mongodb/models/User.js'

import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllProducts = async (req, res) => {}
const getProductDetail = async (req, res) => {}
const createProduct = async (req, res) => {
    try {
        const {
            title,
            desc,
            email,
        } = req.body;

        const session = await mongoose.startSession();
        session.startTransaction();

        const user = await User.findOne({ email }).session(session);

      

        const newProduct = await Product.create({
            title,
            desc
        });

        user.allProducts.push(newProduct._id);
        await user.save({ session });

        await session.commitTransaction();

        res.status(200).json({ message: "Product created successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const updateProduct = async (req, res) => {}
const deleteProduct = async (req, res) => {}

export {
  getAllProducts,
  getProductDetail,
  createProduct,
  updateProduct,
  deleteProduct,
}
