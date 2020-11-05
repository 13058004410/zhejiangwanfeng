const express=require('express');

const pool=require('../pool.js');

var luyou=express.Router();

luyou.get('/huoqu',function(req,res){
    pool.query('select*from news limit 5',function(err,result){
        res.send(result);
        // console.log(result);
    });
});

luyou.get('/huoqu_2',function(req,res){
    pool.query('select*from zongbuxinwen limit 8',function(err,result){
        res.send(result);
    })
});



module.exports=luyou;