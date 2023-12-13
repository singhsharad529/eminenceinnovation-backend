const express = require("express");
const {
  createProduct,
  getProducts,
  getProductsByCategory,
} = require("../controllers/productController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getProducts);
router.route("/search").get(protect, getProductsByCategory);
router.route("/create").post(protect, createProduct);

module.exports = router;
