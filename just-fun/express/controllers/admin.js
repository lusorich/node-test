const Product = require("../models/product");

exports.postAddProduct = (request, response, next) => {
  const { title, imageUrl, price, description } = request.body; 
  const product = new Product(title, imageUrl, price, description);
  product.save();
  response.redirect("/");
};

exports.getAddProduct = (request, response, next) => {
  response.status(200).render("admin/edit-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
  });
};

exports.getEditProduct = (request, response, next) => {
  const editMode = request.query.edit;
  if (!editMode) {
    return response.redirect("/");
  }
  response.status(200).render("admin/edit-product", {
    pageTitle: "Edit product",
    path: "/admin/edit-product",
    editing: editMode
  });
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
                              