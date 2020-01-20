const Koa = require('koa');
const bodyparser = require('body-parser');
const path = require('path');
const koaHbs = require('koa-hbs');
const koaStatic = require('koa-static');
const session = require('koa-session');


const adminRoutes = require('./routes/admin');
const loginRoutes = require('./routes/login');
const mainRoutes = require('./routes/main');

const multer = require('@koa/multer');
const upload = multer({ dest: 'public/assets/img/products' });

const storageConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join('public', 'assets', 'img'));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});

const flash = require('connect-flash');

const rootDir = require('./util/path');

const app = new Koa();

app.use(
  koaHbs.middleware({
    viewPath: __dirname + '/views'
  })
);

app.use(flash());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(koaStatic('./public'));
app.use(multer({ storage: storageConfig }).single('photo'));

app
  .use(adminRoutes.routes())
  //.use(loginRoutes.routes())
  //.use(mainRoutes.routes())
  .use(adminRoutes.allowedMethods());
//app.use('/admin', adminRoutes);
//app.use('/login', loginRoutes);
//app.use('/', mainRoutes);

app.listen(3030);
