const Product = require("../models/product");

exports.postAddProduct = (request, response, next) => {
  const {title, imageUrl, price, description } = request.body; 
  const product = new Product(null, title, imageUrl, price, description);
  product.save();
  response.redirect("/");
};

exports.getAddProduct = (request, response, next) => {
  response.status(200).render("admin/edit-product", {
    pageTitle: "Add product",
    path: "/admin/add-product",
    editing: false
  });
};

exports.getEditProduct = (request, response, next) => {
  const editMode = request.query.edit;
  if (!editMode) {
    return response.redirect("/");
  }
  const prodId = request.params.productId;
  Product.findById(prodId, product => {
    if (!product) {
      return response.redirect("/");
    }
    response.status(200).render("admin/edit-product", {
      pageTitle: "Edit product",
      path: "/admin/edit-product",
      editing: editMode,
      product: product
    });
  });
};

exports.postEditProduct = (request, response, next) => {
  const prodId = request.body.productId;
  const updatedTitle = request.body.title;
  const updatedPrice = request.body.price;
  const updatedImageUrl = request.body.imageUrl;
  const updatedDesc = request.body.description;
  const updatedProduct = new Product(prodId, updatedTitle, updatedPrice, updatedImageUrl, updatedDesc);
  updatedProduct.save();
  response.redirect("/admin/products");
}

exports.postDeleteProduct = (request, response, next) => {
  const {productId, title, imageUrl, price, description } = request.body; 
  const product = new Product(productId, title, imageUrl, price, description);
  product.delete();
}

exports.getProducts = (reqest, response, next) => {
  Product.fetchAll(products => {
    response.status(200).render("admin/products", {
      prods: products,
      pageTitle: "admin products",
      path: "/admin/products"
    });
  });
};
                              