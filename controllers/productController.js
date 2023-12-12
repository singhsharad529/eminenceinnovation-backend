const asyncHandler = require("express-async-handler");
const Product = require("../models/productModule");

/* Only a authenticated user can create and get a product 
  - to create or get a product you need to add a Bearer Token in you Authorization header  
*/

// Get all products from database
const getProducts = asyncHandler(async (req, res) => {
  const proudcts = await Product.find();
  console.log("insidde get notes");
  res.json(proudcts);
});

// Get all products of a specific category
const getProductsByCategory = asyncHandler(async (req, res) => {
  const { category } = req.query;
  console.log(category);
  const proudcts = await Product.find({ category });
  console.log(proudcts);
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

// const getNoteById = asyncHandler(async (req, res) => {
//   const Product = await Product.findById(req.params.id);
//   console.log(Product);
//   if (Product) {
//     res.json(Product);
//   } else {
//     res.status(404).json({ message: "Product not found" });
//   }

//   // res.json(Product);
// });

// const updateNote = asyncHandler(async (req, res) => {
//   const Product = await Product.findById(req.params.id);
//   const { title, content, category } = req.body;
//   if (Product.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("You can't perform this action");
//   }

//   if (Product) {
//     Product.title = title;
//     Product.content = content;
//     Product.category = category;

//     const updatedNote = await Product.save();
//     res.json(updatedNote);
//   } else {
//     res.status(404);
//     throw new Error("Not not found");
//   }
// });

// const deleteNote = asyncHandler(async (req, res) => {
//   const Product = await Product.findById(req.params.id);
//   if (Product.user.toString() !== req.user._id.toString()) {
//     res.status(401);
//     throw new Error("You can't perform this action");
//   }
//   if (Product) {
//     await Product.remove();
//     res.json({ message: "Product Removed" });
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });
module.exports = { createProduct, getProducts, getProductsByCategory };
