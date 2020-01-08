const express = require("express");
const router = express.Router();

let products = [];

router.get("/add-product", (request, response, next) => {
  response
    .status(200)
    .render("add-product", {
      pageTitle: "Add-product",
      path: "/admin/add-product",
      formsCSS: true,
      activeAddProduct: true,
      productCSS: true
    });
});

router.post("/add-product", (request, response, next) => {
  products.push({ title: request.body.title });
  response.redirect("/");
});

exports.router = router;
exports.products = products;
