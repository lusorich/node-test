const Product = require("../models/product");

exports.getAddProduct = (request, response, next) => {
  response.status(200).render("add-product", {
    pageTitle: "Add-product",
    path: "/admin/add-product",
    formsCSS: true,
    activeAddProduct: true,
    productCSS: true
  });
};

exports.postAddProduct = (request, response, next) => {
  const product = new Product(request.body.title);
  product.save();
  response.redirect("/");
};

exports.getProducts = (request, response, next) => {
  const products = Product.fetchAll(products => {
    response.status(200).render("shop", {
      prods: products,
      pageTitle: "Shop",
      path: "/",
      formsCSS: true,
      activeAddProduct: true,
      productCSS: true,
      hasProducts: products.length > 0
    });
  });
};
