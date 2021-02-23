require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const app = express();
const port = 3000;

mongoose.connect(process.env.MONGO_URL);

const userController = require('./route/user.router');
const registerController = require('./route/register.router');
const loginController = require('./route/login.router');
const editController = require('./route/edit.router');
const addController = require('./route/add.router');


app.set('views', './views');
app.set('view engine', 'pug');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use(express.static('public/stylesheets'));
app.use(express.static('public/img'));
app.use(express.static('public/fontawesome'));

app.use('/', userController);

app.use('/login', loginController);

app.use('/register', registerController);

app.use('/edit', editController);

app.use('/add', addController);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
