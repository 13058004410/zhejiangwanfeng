// const express=require('express');
const mysql=require('mysql');
const pool=mysql.createPool({
    user:'root',
    password:'root',
    host:'127.0.0.1',
    port:'3306',
    database:'zhejiangwanfeng',
    connectionLimit:20
});

// pool.get('/huoqu',function(err,result){
//     if(err)throw err
// });

module.exports=pool;