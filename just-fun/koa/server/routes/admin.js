const Router = require('koa-router');
const router = new Router();
const koaBody = require('koa-body');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('main.json');
const db = low(adapter);

db.defaults({ products: [], skills: {} }).write();

router.get('/', ctx => {
  ctx.status(200).render('admin', {
    pageTitle: 'Admin',
    path: '/admin',
    layout: false,
    skillStatus: ctx.request.flash('skillStatus'),
    uploadStatus: ctx.request.flash('uploadStatus')
  });
});

router.post('/skills', (request, response, next) => {
  db.get('skills')
    .set('age', request.body.age)
    .set('concerts', request.body.concerts)
    .set('cities', request.body.cities)
    .set('years', request.body.years)
    .write();
  request.flash('skillStatus', 'Скиллы добавлены успешно');
  response.redirect('/admin');
});

router.post('/upload', (request, response, next) => {
  let pathName = request.file.path.split('public');
  pathName.shift().toString();
  db.get('products')
    .push({
      photo: pathName,
      name: request.body.name,
      price: request.body.price
    })
    .write();
  request.flash('uploadStatus', 'Файл загружен');
  response.redirect('/admin');
});

module.exports = router;
