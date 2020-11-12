const express=require('express');

const pool=require('../pool.js');

var luyou=express.Router();







// 子路由1
luyou.get('/huoqu',function(req,res){
    pool.query('select*from zongbuxinwen limit 5',function(err,result){
        if(err)throw err;
        res.send(result);
        // console.log(result);
    });
});
// 子路由2
luyou.get('/huoqu_2',function(req,res){
    pool.query('select*from zongbuxinwen limit 8',function(err,result){
        if(err)throw err;
        res.send(result);
    })
});
// 子路由3
luyou.get('/huoqu_3',function(req,res){
    pool.query('select*from hexinyewu limit 8',function(err,result){
        if(err)throw err;
        res.send(result);
    });
});
// 子路由4
luyou.get('/huoqu_4',function(req,res){
    pool.query('select*from zongbuxinwen limit 6',function(err,result){
        if(err)throw err;
        res.send(result);
    });
});
//子路由5
luyou.get('/huoqu_5',function(req,res){
    pool.query('select*from zongbuxinwen limit 4',function(err,result){
        if(err)throw err;
        res.send(result);
    });   
});

module.exports=luyou;