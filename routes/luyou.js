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

//走进万丰企业概况文章数据
luyou.get('/qiyegaikuang',function(req,res){
    pool.query('select*from article',function(err,result){
        if(err)throw err;
        res.send(result);
    });
})

//走进万丰董事长致辞数据
luyou.get('/dongshizhangzhici',function(req,res){
    pool.query('select*from article',function(err,result){
        if(err)throw err;
        res.send(result);
    });
});
//走进万丰组织框架数据
luyou.get('/zuzhikuangjia',function(req,res){
    pool.query('select*from article',function(err,result){
        if(err)throw err;
        res.send(result);
    });
});
//走进万丰集团荣誉数据
luyou.get('/jituanrongyu',function(req,res){
    var pno=req.query.pno;
    var start=(pno-1)*12;
    console.log(pno)
    var sql='select*from jituanrongyu limit ?,12';
    pool.query(sql,[start],function(err,result){       
        if(err)throw err;
        res.send(result);
    });
});

//集团荣誉分页列表
luyou.get('/huoqu_6',function(req,res){
    var pno=req.query.pno;
    var psize=req.query.psize;
    var count=parseInt(psize);
    var start=(pno-1)*count;
    var sql='select*from jituanrongyu limit ?,?';
    pool.query(sql,[start,count],function(err,result){
        res.send(result)
    })
});

//企业文化
luyou.get('/qiyewenhua',function(req,res){
    pool.query('select*from article',function(err,result){
        res.send(result)
    })
})
//成员单位
luyou.get('/chengyuandanwei',function(req,res){
    var pno=req.query.pno;
    var psize=req.query.psize;
    var count=parseInt(psize);
    var start=(pno-1)*count;
    var sql='select*from chengyuandanwei limit ?,?';
    pool.query(sql,[start,count],function(err,result){
        // console.log(result);
        res.send(result)
    })
})
//万丰历程
luyou.get('/wanfenglicheng',function(req,res){
    var pno=req.query.pno;
    var psize=req.query.psize;
    var count=parseInt(psize);
    var start=(pno-1)*count;
    var sql='select*from wanfenglicheng limit ?,?';
    pool.query(sql,[start,count],function(err,result){       
        res.send(result)
    })
});


//总部新闻
luyou.get('/zongbuxinwen1',function(req,res){    
    var sql='select*from zongbuxinwen1';
    pool.query(sql,function(err,result){  
           
        res.send(result)
    })    
})





//总部新闻1
// luyou.get('/zongbuxinwen',function(req,res){    
//     var pno=req.query.pno;
//     console.log(pno)  
//     var psize=req.query.psize;
//     var count=parseInt(psize);
//     var start=(pno-1)*count;
//     var sql='select*from zongbuxinwen limit ?,?';
//     pool.query(sql,[start,count],function(err,result){
//         console.log(result);
//         res.send(result)
//     }) 
// })


module.exports=luyou;