var express = require('express');
var path = require('path');
const cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
let mongoose = require('mongoose');
require('dotenv').config();
const databaseName = process.env.node_env

mongoose.connect(`mongodb://localhost/${databaseName}`,{useNewUrlParser:true})
mongoose.set('useCreateIndex', true)

const{ product, cart, users,transaction} = require('./routes');

var app = express();

app.use(logger('dev'));
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/product', product);
app.use('/cart', cart);
app.use('/users', users);
app.use('/transaction', transaction);

module.exports = app;
