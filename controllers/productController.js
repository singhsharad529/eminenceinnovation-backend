const asyncHandler = require("express-async-handler");
const Product = require("../models/productModule");

/* Only a authenticated user can create and get a product 
  - to create or get a product you need to add a Bearer Token in you Authorization header  
*/

// Get all products from database
const getProducts = asyncHandler(async (req, res) => {
  const proudcts = await Product.find();
  res.json(proudcts);
});

// Get all products of a specific category
const getProductsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.query;
  const proudcts = await Product.find({ category });
  res.json(proudcts);
});

// Create a product
const createProduct = asyncHandler(async (req, res) => {
  const productInfo = req.body;
  /* user property will come from from authMiddleware 
    where it extract token from Authorization header 
    and add user id into req object
    */
  productInfo.user = req.user;
  const product = new Product(productInfo);
  const createNote = await product.save();
  res.status(201).json(createNote);
});

module.exports = { createProduct, getProducts, getProductsByCategory };
