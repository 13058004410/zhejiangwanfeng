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
                        <li>${data[i].date}/li>
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
    // jituangaikuang();
    
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

//走进万丰页面的企业文化
function qiyewenhua(){
    $.ajax({
        type:'get',
        dataType:'json',
        contentType:'application/json;utf-8',
        url:'/luyou/qiyewenhua',
        success:function(data){          
            var str='';
            str=data[4].content;
            $('#jituangaikuang').children().remove();
            $('#jituangaikuang').html(str);   
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}   
//走进万丰页面的成员单位
function chengyuandanwei(){
        //声明一个变量pno用来传参--->当前页码   
        var pno=1;
        var pageSize=12;       
        //页面默认加载的分页列表---->第一页
        getData(pno,pageSize);
    
        //第一个函数：发ajax请求获取后端数据，调用第二个函数       
        function getData(curPage,pageSize){           
            $.ajax({
                type:'get',
                dataType:'json',
                url:'/luyou/chengyuandanwei?pno='+curPage+'&psize='+pageSize,
                contentType:'application/json;utf-8',  
                success:function(data){
                    // console.log(data.length);
                    // $('#pagination').html(data)
                    //拿到数据之后在页面循环输出
                    innerData(data,pno);
                },
                error:function(e){
                    console.log(e.staus)
                    console.log(e.responseText)
                }
            });           
        }
       
        //第二个函数：生成分页列表、生成内容列表
        function innerData(data,curPage){
            var totalPage=Math.ceil(data.length/4);
    
            //生成内容列表=======================================
            var html='<div id="content"><ul>';
            for(var i=0;i<Math.ceil(data.length);i++){
                html+=data[i].li;     
            }
            html+='</ul></div>';
            // $('#jituangaikuang').html(html);
    
    
    
            //生成分页列表============================================
            // console.log(data.length)
            var str='<div id="pagination"><ul>';
            //把首页按钮输出来
            if(curPage!=1){
                str+=`
                    <li class='' id='home'>首页</li>
                `;      
            };
            //把上一页输出
            if(curPage!=1){
                str+=`
                    <li class='' id='pre'>上一页</li>
                `;
            }
            //循环输出页码================    
            for(var i=1;i<=totalPage;i++){
                if(i==curPage){
                    str+=`
                        <li class="li active" index="${i}">${i}</li>
                    `;
                }else{
                    str+=`
                        <li class="li" index="${i}">${i}</li>
                    `;
                }                                    
            }
            //把下一页输出
            if(curPage!=totalPage){
                str+=`
                    <li class='' id='next'>下一页</li>
                `;
            }
            //把末页按钮输出来
            if(curPage!=totalPage){
                str+=`
                    <li class='' id='total'>末页</li>
                `;
            };
            str+='</ul></div>';
            html+=str;
            $('#jituangaikuang').html(html);
    
    
            
            //点击首页
            $('#home').click(function(){
                console.log(pno);
                pno=1;
                getData(pno,pageSize);
            })
            //点击上一页
            $('#pre').click(function(){
                console.log(pno);
                pno=pno-1;
                if(pno<1){
                    pno==1;
                };
                getData(pno,pageSize);
            })
            //点击下一页
            $('#next').click(function(){
                pno=pno+1;
                if(pno>totalPage){
                    pno==totalPage;
                };
                getData(pno,pageSize);
            })
            //点击末页
            $('#total').click(function(){
                console.log(pno);
                pno=totalPage;
                getData(pno,pageSize);
            })
            //点击切换内容页
            $('.li').click(function(){                  
                pno=$(this).attr('index');
                //获取pno发再次发ajax请求
                getData(pno,pageSize);                
                var html='<div id="content"><ul>';
                for(var i=0;i<Math.ceil(data.length);i++){  
                    // console.log(11168);                  
                    html+=data[i];                         
                }
                html+='</ul></div>';
                // console.log(str);
                // $('#content').remove();
                $('#jituangaikuang').html(html);               
            });
    
            
        }    
}

//走进万丰页面的万丰历程
function wanfenglicheng(){
    //声明一个变量pno用来传参--->当前页码   
    var pno=1;
    var pageSize=2;       
    //页面默认加载的分页列表---->第一页
    getData(pno,pageSize);

    //第一个函数：发ajax请求获取后端数据，调用第二个函数       
    function getData(curPage,pageSize){           
        $.ajax({
            type:'get',
            dataType:'json',
            url:'/luyou/wanfenglicheng?pno='+curPage+'&psize='+pageSize,
            contentType:'application/json;utf-8',  
            success:function(data){
                // console.log(data.length);
                // $('#pagination').html(data)
                //拿到数据之后在页面循环输出
                innerData(data,pno);
            },
            error:function(e){
                console.log(e.staus)
                console.log(e.responseText)
            }
        });           
    }
    //第二个函数：生成分页列表、生成内容列表
    function innerData(data,curPage){
      
        var totalPage=Math.ceil(data.length);
        //生成分页列表============================================
        // console.log(data.length)
        // var str=`<div id="pre" class="pre"><img src="../img/prev.png"></div>`;
        
        //把首页按钮输出来
        // if(curPage!=1){
        //     str+=`
        //         <li  id='home'>首页>
        //     `;      
        // };
        //把上一页输出
        var str='<div class="wrapper"><div class="list" style="left:500px;">';
        //循环输出页码================
        // var X;
        // var lis;
        // lis=$('#jituangaikuang li');
        // for(var i=1;i<lis.length;i++){
        //     lis[i].click(function(){
        //         X=$(this).offset().left;
        //         console.log(X)
        //     })
        // };
        for(var i=1;i<=totalPage;i++){
            if(i==curPage){
                // <li class="active" index="${i}">${i+2000}</li>
                str+=`
                    <span index="${i}" class="on" index="${i}">${i+2000}</span>
                    
                `;
            }else{
                // <li class="" index="${i}">${i+2000}</li>
                str+=`
                    <span index="${i}">${i+2000}</span>                    
                `;
            }                                    
        }
            
        
        
        //把下一页输出
        str+='</div>';
        //把末页按钮输出来
        // if(curPage!=totalPage){
        //     str+=`
        //         <li class='' id='total'>末页</li>
        //     `;
        // };
        str+=`
            <a href="javascript:;"  rel="external nofollow" class="arrow left"><img src="../img/next.png" alt=""></a>
            <a href="javascript:;"  rel="external nofollow" class="arrow right"><img src="../img/prev.png" alt=""></a>
        `;
        // <div  id='next' class="next"><img src="../img/next.png"></div>
        $('#jituangaikuang').html(str);


        
        //点击首页
        // $('#home').click(function(){
        //     // console.log(pno);
        //     pno=1;
        //     getData(pno,pageSize);
        // })
        //点击上一页
        $('#pre').click(function(){          
            pno=pno-1;
            if(pno<1){
                pno=1;
                // console.log(pno);
            };
            getData(pno,pageSize);
        })
        //点击下一页
        $('#next').click(function(){           
            pno=pno+1;
            if(pno>totalPage){
                pno=totalPage;
            };
            console.log(totalPage)
            getData(pno,pageSize);
        })
        //点击末页
        // $('#total').click(function(){
        //     console.log(pno);
        //     pno=totalPage;
        //     getData(pno,pageSize);
        // })
        //点击切换内容页
        $('.li').click(function(){                  
            pno=$(this).attr('index');
            //获取pno发再次发ajax请求
            getData(pno,pageSize);                
            var html='<div id="content"><ul>';
            for(var i=0;i<Math.ceil(data.length);i++){  
                // console.log(11168);                  
                html+=data[i];                         
            }
            html+='</div></div>';
            // console.log(str);
            // $('#content').remove();
            // $('#jituangaikuang').html(html);               
        });

        paomadeng();

        //生成内容列表=======================================
        var html='<div id="content"><ul>';
        // console.log(data);
        for(var i=0;i<Math.ceil(data.length);i++){
            html+=data[i].li;     
        }        
        html+='</ul></div>';
        // str+=html;
        // $('#jituangaikuang').html(str);


        
    } 
}
