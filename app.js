var express=require('express');
var luyou=require('./routes/luyou.js');
var bodyParser=require('body-parser');

var app=express();
app.listen(80,function(){
    console.log('server has started...');
});


app.use(express.static('src'));
app.use(bodyParser.urlencoded({
    extended:false
}));


//页面跳转---走进万丰
app.get('/about',function(req,res){
    res.sendFile(__dirname+'/src/'+'about.html');
});






app.use('/luyou',luyou);