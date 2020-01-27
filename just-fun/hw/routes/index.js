const express = require("express");
const router = express.Router();

let users = [];

router.get("/", (req, res, next) => {
  res.status(200).render("index", { pageTitle: "index" });
});

router.post("/", (req, res, next) => {
  users.push(req.body.user);
  console.log(users);
  res.redirect("/");
});

exports.router = router;
exports.users = users;
