exports.getProducts = (request, response, next) => {
  const products = Product.fetchAll(products => {
    response.status(200).render("shop/product-list", {
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

exports.getIndex = (request, response, next) => {
  Product.fetchAll(products => {
    response.status(200).render("shop/index ", {
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
