const asyncHandler = require("express-async-handler");
const Product = require("../models/productModule");

const getProducts = asyncHandler(async (req, res) => {
  const proudcts = await Product.find();
  console.log("insidde get notes");
  res.json(proudcts);
});

/* Only a authenticated and authorized user can create a product
  - to create a product you need to add a Bearer Token in you Authorization header  
*/
const createProduct = asyncHandler(async (req, res) => {
  const { title, thumbnail, price } = req.body;
  if (!title || !thumbnail || !price) {
    res.status(400);
    throw new Error("Please Fill all the Fields");
  } else {
    /* user property will come from from authMiddleware 
    where it extract token from Authorization header 
    and add user id into req object
    */
    const product = new Product({
      user: req.user._id,
      title,
      thumbnail,
      price,
    });
    const createNote = await product.save();
    res.status(201).json(createNote);
  }
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
module.exports = { createProduct, getProducts };
