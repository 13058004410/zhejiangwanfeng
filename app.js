var express=require('express');
var luyou=require('./routes/luyou.js');
var bodyParser=require('body-parser');

var app=express();
app.listen(80);

app.use(express.static('src'));

app.use(bodyParser.urlencoded({
    extended:false
}));

app.use('/luyou',luyou);