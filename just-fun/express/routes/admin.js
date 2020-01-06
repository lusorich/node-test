const express = require("express");
const path = require("path");
const router = express.Router();

router.get("/add-product", (request, response, next) => {
  response.sendFile(path.join(__dirname, "../", "views", "add-product.html"));
});

router.post("/add-product", (request, response, next) => {
  console.log(request.body);
});

module.exports = router;
