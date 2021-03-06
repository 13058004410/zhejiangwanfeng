// const { get } = require("../../routes/luyou");

// const { get } = require("../../routes/luyou");

$(function(){
    //通知公告列表的ajax请求
    $.ajax({
        type:'GET',
        dataType:'json',  //服务器返回的数据类型
        //contentType:'application/json;charset=UTF-8',  //发给服务器的数据类型
        url:'/luyou/huoqu',
        success:function(data){
            // console.log(data);
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li>
                        <a href="news?id=${data[i].id}">
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
        //contentType:'application/json;charset=UTF-8',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li>
                        <img src="./img/index_icon.jpg" alt="">
                        <a href="news?id=${data[i].id}">
                            ${data[i].title}
                        </a>
                        <span>${data[i].date}<span>
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
        //contentType:'application/json;charset=utf-8',
        url:'/luyou/huoqu_2',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li><a href="news?id=${data[i].id}">${data[i].title}</a></li>
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
        //contentType:'application/json;charset=utf-8',
        url:'/luyou/huoqu_3',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <div><a href="news?id=${data[i].id}"><img src="${data[i].img}" alt=""><h3>${data[i].title}</h3></a></div>
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
        //contentType:'application/json;charset=utf-8',
        url:'/luyou/huoqu_4',       
        success:function(data){
            // console.log(data)
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li><a href="news?id=${data[i].id}">${data[i].title}</a><img src="./img/hot.png" alt=""></li>
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
        //contentType:'application/json;charset=uft-8',  get方法是没有这句话的,post才有
        url:'/luyou/huoqu_5',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li><a href="news?id=${data[i].id}">${data[i].title}</a></li>
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
function yemian1(){
    $.ajax({
        type:'get',
        dataType:'json',
        //contentType:'application/json;utf-8',
        url:'/luyou/qiyegaikuang',
        success:function(data){
            var str=''; 
            str=data[0].content;    
            $('#container').html(str);
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}

//走进万丰页面的董事长致辞
function yemian2(){
    $.ajax({
        type:'get',
        dataType:'json',
        //contentType:'application/json;utf-8',
        url:'/luyou/dongshizhangzhici',
        success:function(data){          
            var str='';
            str=data[1].content;
            $('.text-content').remove()
            $('#container').html(str);   
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}
//走进万丰页面的组织框架
function yemian3(){
    $.ajax({
        type:'get',
        dataType:'json',
        //contentType:'application/json;utf-8',
        url:'/luyou/zuzhikuangjia',
        success:function(data){          
            var str='';
            str=data[2].content;
            $('.text-content').remove()
            $('#container').html(str);   
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}

//走进万丰页面的集团荣誉
function yemian4(){
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
            url:'/luyou/jituanrongyu?pno='+curPage+'&psize='+pageSize,
            //contentType:'application/json;utf-8',  
            success:function(data){
                // console.log(data);
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
        var html='<div id="content"><ul class="jituanrongyu">';
        for(var i=0;i<Math.ceil(data.length);i++){
            html+=`<a href="news?id=${data[i].id}"><li><img src=${data[i].img}><p>${data[i].p}</p></li></a>`;    
            console.log(data[i]) 
        }
        html+='</ul></div>';
        $('#container').html(html);
   
        //生成分页列表============================================
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
        $('#container').html(html);


        
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
            $('#container').html(html);               
        });

        
    }    
}



//走进万丰页面的企业文化
function yemian5(){
    $.ajax({
        type:'get',
        dataType:'json',
        //contentType:'application/json;utf-8',
        url:'/luyou/qiyewenhua',
        success:function(data){          
            var str='';
            str=data[4].content;
            $('.text-content').remove()
            $('#container').html(str);   
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    })
}

//走进万丰页面的成员单位
function yemian6(){
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
                //contentType:'application/json;utf-8',  
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
            var html='<div id="content"><ul class="chengyuandanwei">';
            for(var i=0;i<Math.ceil(data.length);i++){
                html+=data[i].li;     
            }
            html+='</ul></div>';
            // $('#container').html(html);
       
            //生成分页列表============================================
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
            $('#container').html(html);
    
    
            
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
                $('#container').html(html);               
            });
    
            
        }    
}


//走进万丰页面的万丰历程  
function yemian7(){
    //声明一个变量pno用来传参--->当前页码   
    var pno=1;//全局变量
    var pageSize=6;  //全局变量
    //页面默认加载的分页列表---->第一页
    getData(pno,pageSize);
    //第一个函数：发ajax请求获取后端数据，调用第二个函数       
    function getData(curPage,pageSize){           
        $.ajax({
            async: false,
            type:'get',
            dataType:'json',
            url:'/luyou/wanfenglicheng?pno='+curPage+'&psize='+pageSize,
            //contentType:'application/json;utf-8',  
            success:function(data){
                // console.log(data);
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
        // console.log(totalPage);
        var html='<div class="wrapper">';
        html+=`<div class="list" id="list" style="left:23%">`;
        //循环输出页码================    
        for(var i=1;i<=totalPage;i++){
            if(i==curPage){
                html+=`
                        <span class="on" index="${i}">${i+2000}</span>
                `;
            }else{
                html+=`
                        <span class="" index="${i}">${i+2000}</span>
                `;
            }                                    
        }
        //把左右箭头输出
        html+=`</div>`;
        if(curPage!=1){
            html+=`<a class="arrow " id="right" ><img src="../img/prev.png"></a>`
        };
        if(curPage!=totalPage){
            html+=`<a class="arrow " id="left"><img src="../img/next.png"></a>`;
        }


        html+=`</div>`;

        $('#container').html(html);
        
        // 开始输出内容=======================
        var str=`<div id="content"><ul class="course">`;
        for(i in data){
            str+=`${data[i].li}`;
        }
        str+=`</ul></div>`;
        html+=str;
        $('#container').html(html);
        // 上一页=======
        $('#right').click(function(){
            pno=pno-1;
            if(pno<1){
                pno==1;
            }else{
                getData(pno,pageSize);
            }
            $('.wrapper .list').animate({left:'100px'})
        });
        //下一页=======
        $('#left').click(function(){
            pno=pno+1;
            if(pno>totalPage){
                pno==totalPage;
                getData(pno,pageSize);
            }else{
                getData(pno,pageSize);
            }
            $('.wrapper .list').animate({left:'-100px'})
        });

        //点击页码=========
        $('#container span').click(function(){
            index=$(this).attr('index');
            pno=index;
            getData(pno,pageSize);
        })
        	
    } 
}

// news页面==================================================


//新闻资讯页面的总部新闻==============轮播图部分
function yemian8(){
    
    // console.log(1314569)
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
            url:'/luyou/zongbuxinwen1?pno='+curPage+'&psize='+pageSize,
            //contentType:'application/json;utf-8',
            async:false,  //这个设置很有用！！！！！！！！！！！！！！！！！
            success:function(data){
                // console.log(data);
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
   
    //第二个函数：生成轮播图=======================================
    function innerData(data,curPage){       
        var totalPage=Math.ceil(data.length/6);
        // console.log(data.length)
        var html=`
                    <div class="banner">
                        <!-- 要轮播的图片            -->
                        <div class="viewport">
                            <!-- 包着图片的那个大框         -->
                            <div class="wrapper" style="left:0px">`;
                                for(var i=0;i<3;i++){
                                    html+=`${data[i].a}`
                                }
            html+=    
                            `</div>
                        </div> 
                        <div>
                            <ol class="indecate_1">`;
                                for(var i=0;i<3;i++){
                                    
                                    html+=`
                                        ${data[i].pot}
                                    `;
                                }
        html+= 
                            `</ol>
                         </div>
                    </div>     
                    <div id="content">
                        <ul class="zongbuxinwen"></ul>
                        <div id="pagination">
                            <ul></ul> 
                        </div>   
                    </div>
                     `; 

        $('#container').html(html)  
        
        
        //新闻资讯页面的总部新闻---新闻的列表页 
        $.ajax({
            type:'get',
            dataType:'json',
            url:'/luyou/zongbuxinwen/news',
            async:false,
            success:function(data){
                var str=`
                    <div class="news-list">
                        <ul>`;
                    
                        $.each(data,function(idx,val){
                            // console.log(val)
                            str+=`
                            <a href="news?id=${val.id}">
                                <li>${val.title}</li>
                            </a>
                            `;
                        })   
                        
                    str+=`</ul>
                    </div>
                `;
                $('#content .zongbuxinwen').html(str);
                //生成分页列表============================================
                // var str='';
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
                console.log(totalPage) 
                totalPage=totalPage/2 
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
                $('#pagination ul').html(str);
            
                //点击首页
                $('#home').click(function(){
                    pno=1;
                    getData(pno,pageSize);
                })
                //点击上一页
                $('#pre').click(function(){
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
                        html+=data[i];                         
                    }
                    html+='</ul></div>';
                })
        
            }
        })
    //新闻资讯页面的总部新闻---新闻列表的内容页 
    function getId(name) {   
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg); //匹配目标参数               
        if (r != null) return unescape(r[2]); return null; //返回参数值
    }
    var id=getId('id')  
    // console.log(id)

    $.ajax({                   
        type:'get',
        dataType:'json',
        url:'/luyou/zongbuxinwen/news',
        //contentType:'application/json;utf-8',
        async:false,  //这个设置很有用！！！！！！！！！！！！！！！！！
        success:function(data){
            $.each(data,function(idx,val){
                // console.log(val);
                if(id==val.id){
                    console.log(val.content)
                    $('#container').empty()
                    $('#container').html(val.content);
                    // console.log(data.length)
                    
                }
            })
            //内容页点击上一条    
            $('.slip-tab').find('a.prev').click(function(){
                function getId(name) {   
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                    var r = window.location.search.substr(1).match(reg); //匹配目标参数 
                    console.log(window.location.href)              
                    if (r != null) return unescape(r[2]); return null; //返回参数值
                }
                var id=getId('id')
                
                if(id!==null){
                    id--;
                    if(id<1){
                        id==1;                        
                    }else{
                        window.location.href=`news?id=${id}`
                    }
                    
                }  
            })
            //内容页点击下一条    
            $('.slip-tab').find('a.next').click(function(){
                function getId(name) {   
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
                    var r = window.location.search.substr(1).match(reg); //匹配目标参数 
                                
                    if (r != null) return unescape(r[2]); return null; //返回参数值
                }
                var id=getId('id')
                
                if(id!==null){
                    id++;
                    if(id>data.length){
                        id==data.length;                        
                    }else{
                        window.location.href=`news?id=${id}`
                    }
                    
                }
            })
            
        },
        error:function(e){
            console.log(e.staus)
            console.log(e.responseText)
        }
    })                   
        
    }    
}

//新闻资讯页面的总部新闻---新闻列表部分
function yemian8_1(){
    //声明一个变量pno用来传参--->当前页码
    var pno=1;
    var pageSize=10;                
    //页面默认加载的分页列表---->第一页
    getData(pno,pageSize);

    //第一个函数：发ajax请求获取后端数据，调用第二个函数       
    function getData(curPage,pageSize){           
        $.ajax({
            type:'get',
            dataType:'json',
            url:'/luyou/zongbuxinwen?pno='+curPage+'&psize='+pageSize,
            //contentType:'application/json;utf-8',
            async:false,  //这个设置很有用！！！！！！！！！！！！！！！！！
            success:function(data){
                // console.log(data);
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
        console.log(totalPage)
        //生成新闻列表===========================================                  
        var html='';
        for(var i=0;i<totalPage;i++){
            html+=`<a href="/news?id=${data[i].id}">
                <li>${data[i].title}</li>
            </a>`;    
            // console.log(data[i]) 
        }
        $('#content .zongbuxinwen').html(html);
            
        // // $.ajax({
        // //     type:'get',
        // //     dataType:'json',
        // //     url:'/luyou/zongbuxinwen/news',
        // //     async:false,
        // //     success:function(data){
        // //         var str=`
        // //             <div class="news-list">
        // //                 <ul>`;
                     
        // //                 $.each(data,function(idx,val){
        // //                     // console.log(val)
        // //                     str+=`
        // //                     <a href="news?id=${val.id}">
        // //                         <li>${val.title}</li>
        // //                     </a>
        // //                     `;
        // //                 })   
                        
        // //             str+=`</ul>
        // //             </div>
        // //         `;
                
        // //         $('#content .zongbuxinwen').html(str)
        // //     }
        // })

        



        //生成分页列表============================================
        var str='';
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
          
        totalPage=totalPage/5;
        console.log(totalPage)
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
        $('#pagination ul').html(str);
       
        //点击首页
        $('#home').click(function(){
            pno=1;
            getData(pno,pageSize);
        })
        //点击上一页
        $('#pre').click(function(){
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
                html+=data[i];                         
            }
            html+='</ul></div>';
        })
        

        

    }   
    
    

}








    
