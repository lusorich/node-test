const express = require("express");
const path = require("path");
const router = express.Router();
const rootDir = require("../util/path");

router.use("/", (request, response, next) => {
  response.sendFile(path.join(rootDir, "views", "404.html"));
});

module.exports = router;
