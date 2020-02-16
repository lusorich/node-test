const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getProducts = (request, response, next) => {
  const products = Product.fetchAll(products => {
    response.status(200).render("shop/product-list", {
      prods: products,
      pageTitle: "All products",
      path: "/products",
      formsCSS: true,
      activeAddProduct: true,
      productCSS: true,
      hasProducts: products.length > 0
    });
  });
};

exports.getProduct = (request, response, next) => {
  const prodId = request.params.productId;
  Product.findById(prodId, product => {
    response.status(200).render("shop/product-item", {
      product: product,
      pageTitle: "Product",
      path: "/products",
      formsCSS: true,
      activeAddProduct: true,
      productCSS: true,
    });
  })
};


exports.getIndex = (request, response, next) => {
  Product.fetchAll(products => {
    response.status(200).render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/"
    });
  });
};

exports.getCart = (request, response, next) => {
  response.render("shop/cart", {
    path: "/cart",
    pageTitle: "Your Cart"
  });
};

exports.postCart = (request, response, next) => {
  const prodId = request.body.productId;
  Product.findById(prodId, (product) => {
    Cart.addProduct(prodId, product.price);
  })
  response.redirect("/cart");
};

exports.getCheckout = (request, response, next) => {
  response.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout"
  });
};

exports.getOrders = (request, response, next) => {
  response.render("shop/orders", {
    path: "/orders",
    pageTitle: "Orders"
  });
};
