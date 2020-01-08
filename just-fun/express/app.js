const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const expressHbs = require("express-handlebars");

const adminData = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const page404 = require("./routes/404");

const rootDir = require("./util/path");

const app = express();

app.engine("hbs", expressHbs({ defaultLayout: "main-layout", extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", "views");

app.use(bodyparser.urlencoded({ extended: false }));
app.use(express.static(path.join(rootDir, "public")));

app.use("/admin", adminData.router);
app.use(shopRoutes);
app.use(page404);

app.listen(3030);
