const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const page404 = require("./routes/404");

const rootDir = require("./util/path");

const app = express();

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/", shopRoutes);
app.use("/admin", adminRoutes);
app.use(page404);

app.listen(3030);
