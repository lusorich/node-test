const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/', (request, response, next) => {
  response.status(200).render('index', {
    pageTitle: 'Index',
    path: '/index',
    layout: false
  });
});

router.post('/', (request, response, next) => {
  let toJson = JSON.stringify(request.body);
  try {
    fs.appendFileSync('main.json', toJson);
    console.log('The "data to append" was appended to file!');
  } catch (err) {
    console.log('error');
  }
  let fileJson = fs.readFileSync('main.json').toString();
  console.log(fileJson);
});

module.exports = router;
