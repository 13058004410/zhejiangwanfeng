
function jituanrongyu(){
    //声明一个变量pno用来传参--->当前页码   
    var pno=1;
    var pageSize=12;       
    //页面默认加载的分页列表---->第一页
    getData(1,12);

    //第一个函数：发ajax请求获取后端数据，调用第二个函数       
    function getData(curPage,pageSize){           
        $.ajax({
            type:'get',
            dataType:'json',
            url:'/luyou/huoqu_6?pno='+curPage+'&psize='+pageSize,
            contentType:'application/json;utf-8',  
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
        var totalPage=Math.ceil(data.length/2);

        //生成内容列表=======================================
        var html='<div id="content"><ul>';
        for(var i=0;i<Math.ceil(data.length);i++){
            html+=`                   
                    <li>
                        <img src="${data[i].img}" alt="" style="height:80%;">
                        <p>${data[i].p}</p>
                    </li>                   
            `;     
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
                html+=`                   
                        <li>
                            <img src="${data[i].img}" alt="" style="height:80%;">
                            <p>${data[i].p}</p>
                        </li>                   
                `;                         
            }
            html+='</ul></div>';
            // console.log(str);
            // $('#content').remove();
            $('#jituangaikuang').html(html);               
        });

        
    }        

}