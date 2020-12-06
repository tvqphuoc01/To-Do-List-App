require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL);

const userController = require('./route/user.router');

app.set('views', './views');
app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static('public/stylesheets'));
app.use(express.static('public/img'));

app.use('/', userController);

app.get('/login', function(req, res) {
  res.render('login');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
