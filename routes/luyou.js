const express=require('express');

const pool=require('../pool.js');

var luyou=express.Router();

luyou.get('/huoqu',function(res,res){
    pool.query('select*from news limit 5',function(err,result){
        res.send(result);
        // console.log(result);
    });
});

luyou.get('/huoqu_2',function(res,req){
    pool.query('select*from news limit 8',function(err,result){
        res.send(result);
    })
});



module.exports=luyou;