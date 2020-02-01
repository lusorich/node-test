const express = require("express");
const router = express.Router();
const adminController = require("../controllers/shop");

router.get("/add-product", adminController.getAddProduct);
router.get("/products");
router.post("/add-product", adminController.postAddProduct);

module.exports = router;
