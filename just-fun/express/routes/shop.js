const express = require("express");
const router = express.Router();
const adminData = require("./admin");

router.get("/", (request, response, next) => {
  let products = adminData.products;
  response
    .status(200)
    .render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
});

module.exports = router;
 