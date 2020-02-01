const Product = require("../models/product");

exports.getAddProduct = (request, response, next) => {
  response.status(200).render("admin/add-product", {
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

exports.getProducts = (reqest, response, next) => {
  Product.fetchAll(products => {
    response.status(200).render("admin/products", {
      prods: products,
      pageTitle: "admin products",
      path: "/admin/products"
    });
  });
};
