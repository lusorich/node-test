const express = require('express');
const bodyparser = require('body-parser');
const expressHbs = require('express-handlebars');
const fileUpload = require('express-fileupload');

const app = express();

app.engine('hbs', expressHbs({ defaultLayout: 'main-layout', extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(fileUpload());
app.use(bodyparser.urlencoded({ extended: false }));

app.get('/admin', (req, res, next) => {
    console.log(req.files);
    res.status(200).render('admin', {
        pageTitle: 'Admin',
        path: '/admin',
        layout: false
      });
});

app.post('/admin/upload', (req, res, next) => {
    console.log(req.files);
})

app.listen(3030);
