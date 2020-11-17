// const { get } = require("../../routes/luyou");

$(function(){
    //通知公告列表的ajax请求
    $.ajax({
        type:'GET',
        dataType:'json',  //服务器返回的数据类型
        contentType:'application/json;charset=UTF-8',  //发给服务器的数据类型
        url:'/luyou/huoqu',
        success:function(data){
            // console.log(data);
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li>
                        <a href="#">
                            ${data[i].title}
                        </a>
                        <img src="./img/hot.png" alt="">
                    </li>
                `
            };   
            $('#notice').html(str);
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    }); 
    //总部新闻列表的ajax请求
    $.ajax({
        type:'GET',
        dataType:'json',
        url:'/luyou/huoqu_2',
        contentType:'application/json;charset=UTF-8',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li>
                        <img src="./img/index_icon.jpg" alt="">
                        <a href="#">
                            ${data[i].title}
                        </a>
                        <span>${data[i].date}</span>
                    </li>
                `
            }
            $('#news-list').html(str);
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    });   
    // 文件发布列表
    $.ajax({
        type:"get",
        dataType:'json',
        contentType:'application/json;charset=utf-8',
        url:'/luyou/huoqu_2',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li><a href="#">${data[i].title}</a></li>
                `;
            }
            $('#document').html(str);
        },
        err:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
    // 核心业务列表
    $.ajax({
        type:"get",
        dataType:'json',
        contentType:'application/json;charset=utf-8',
        url:'/luyou/huoqu_3',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <div><a href="#"><img src="${data[i].img}" alt=""><h3>${data[i].title}</h3></a></div>
                `;
            }
            $('#hexinyewu').html(str);
            // console.log($('#hexinyewu').html(str))
        },
        err:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    });
    // 成员单位列表
    $.ajax({
        type:'get',
        dataType:'json',
        contentType:'application/json;charset=utf-8',
        url:'/luyou/huoqu_4',       
        success:function(data){
            // console.log(data)
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li><a href="#">${data[i].title}</a><img src="./img/hot.png" alt=""></li>
                `
            };
            $('#member_unit').html(str);
        },
        err:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
    //视频中心
    $.ajax({
        type:'get',
        dataType:'json',
        contentType:'application/json;charset=uft-8',
        url:'/luyou/huoqu_5',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li><a href="#">${data[i].title}</a></li>
                `;
            };
            $('#video-list').html(str);
        },
        err:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })

    //页面加载时默认显示的文章
    jituangaikuang();
    
})

//走进万丰页面的企业概况
function jituangaikuang(){
    $.ajax({
        type:'get',
        dataType:'json',
        contentType:'application/json;utf-8',
        url:'/luyou/qiyegaikuang',
        success:function(data){
            var str=''; 
            str=data[0].content;    
            $('#jituangaikuang').html(str);
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}

//走进万丰页面的董事长致辞
function dongshizhangzhici(){
    $.ajax({
        type:'get',
        dataType:'json',
        contentType:'application/json;utf-8',
        url:'/luyou/dongshizhangzhici',
        success:function(data){          
            var str='';
            str=data[1].content;
            $('.text-content').remove()
            $('#jituangaikuang').html(str);   
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}
//走进万丰页面的组织框架
function zuzhikuangjia(){
    $.ajax({
        type:'get',
        dataType:'json',
        contentType:'application/json;utf-8',
        url:'/luyou/zuzhikuangjia',
        success:function(data){          
            var str='';
            str=data[2].content;
            $('.text-content').remove()
            $('#jituangaikuang').html(str);   
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}
//走进万丰页面的集团荣誉
function jituanrongyu(){
    $.ajax({
        type:'get',
        dataType:'json',
        contentType:'application/json;charset=utf-8',
        url:'/luyou/jituanrongyu',
        success:function(data){
            console.log(data);
            var str=data[3].content;
            $('.text-content').remove();
            $('#jituangaikuang').html(str);
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}
