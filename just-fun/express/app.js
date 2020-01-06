const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const page404 = require("./routes/404");

app.use(bodyparser.urlencoded({ extended: false }));

app.use("/admin", adminRoutes);
app.use(shopRoutes);
app.use(page404);

app.listen(3030);
