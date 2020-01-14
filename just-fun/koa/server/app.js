const Koa = require('koa');
const serve = require('koa-static');
const hbs = require('koa-hbs');
const Router = require('koa-router');
const bodyparser = require('body-parser');
const path = require('path');

const adminRoutes = require('./routes/admin');
const loginRoutes = require('./routes/login');
const mainRoutes = require('./routes/main');

const rootDir = require('./util/path');
const router = new Router();

const app = new Koa();

app.use(serve(path.join(rootDir, 'public')));

app.use(hbs.middleware({
  viewPath: __dirname + '/views',
  defaultLayout: "main"
}));
app.set('view engine', 'hbs');
app.set('views', 'views');

app.use(bodyparser.urlencoded({ extended: false }));

router.use('/admin', adminRoutes);
router.use('/login', loginRoutes);
router.use('/', mainRoutes);

app.use(router.routes());

app.listen(3030);
