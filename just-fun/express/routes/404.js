const express = require("express");
const router = express.Router();
const notFoundController = require("../controllers/notFound");

router.use("/", notFoundController.get404);

module.exports = router;
