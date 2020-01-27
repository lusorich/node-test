const express = require("express");
const router = express.Router();
const users = require("./index").users;

router.get("/", (req, res, next) => {
  res.status(200).render("users", {
    users: users,
    pageTitle: "users"
  });
});

module.exports = router;
