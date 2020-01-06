const express = require("express");
const router = express.Router();

router.use("/", (request, response, next) => {
  response.status(404).send("<h1>404</h1");
});

module.exports = router;
