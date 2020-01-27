const express = require('express');
const indexRoutes = require('./routes/index');
const usersRoutes = require('./routes/users');
const bodyparser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

app.use(bodyparser.urlencoded({ extended: false }));

app.use('/', indexRoutes.router);
app.use('/users', usersRoutes);

app.listen(3030);