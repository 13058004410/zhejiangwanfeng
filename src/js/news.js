// 新闻资讯栏目=====================================================
$(document).ready(function(){
   
    //手机端导航按钮
    $('.icon').click(function(){
        $('.nav-m').toggle()
    })

    // 电脑端当鼠标滑入导航栏li时出现下边框
    $('#nav li').eq(0).mouseenter(
        
        function(){
            console.log(1688);
            $(this).css('border-bottom','2px solid #1D6BC3')
        }
    ).mouseleave(
        function(){
            $(this).css('border-bottom','2px solid white')
        }
    )
    $('#nav li').eq(1).mouseenter(
        function(){
            $(this).css('border-bottom','2px solid #1D6BC3')
        }
    ).mouseleave(
        function(){
            $(this).css('border-bottom','2px solid white')
        }
    )
    $('#nav li').eq(2).mouseenter(
        function(){
            $(this).css('border-bottom','2px solid #1D6BC3')
        }
    ).mouseleave(
        function(){
            $(this).css('border-bottom','2px solid white')
        }
    )
    $('#nav li').eq(3).mouseenter(
        function(){
            $(this).css('border-bottom','2px solid #1D6BC3')
        }
    ).mouseleave(
        function(){
            $(this).css('border-bottom','2px solid white')
        }
    )
    $('#nav li').eq(4).mouseenter(
        function(){
            $(this).css('border-bottom','2px solid #1D6BC3')
        }
    ).mouseleave(
        function(){
            $(this).css('border-bottom','2px solid white')
        }
    )


    $(window).resize(function(){
          location.reload()
        // alert('窗口大小改变了')
    })

    // 导航栏下拉菜单JS代码====================================
    // 走进万丰
    $('#nav li').eq(0).mouseenter(
        function(){
            $('#m1').css('display','flex')
        }).mouseleave(
            function(){
                    $('#m1').css('display','none')                   
                })

    $('#m1').mouseenter(
        function(){
            $(this).css('display','flex')
        }    
    ).mouseleave(
        function(){
                $('#m1').css('display','none')
        })

    // 新闻资讯
    $('#nav li').eq(1).mouseenter(
        function(){
            $('#m2').css('display','flex')
        }
    ).mouseleave(
        function(){
            $('#m2').css('display','none')
        }
    )
    $('#m2').mouseenter(
        function(){
            $(this).css('display','flex')
        }
    ).mouseleave(
        function(){
            $(this).css('display','none')
        })
    
    // 核心业务
    $('#nav li').eq(2).mouseenter(
        function(){
            $('#m3').css('display','flex')
        }).mouseleave(
            function(){
                $('#m3').css('display','none')
            }
        )
    $('#m3').mouseenter(
        function(){
            $(this).css('display','flex')
        }
    ).mouseleave(
        function(){
            $(this).css('display','none')
        }
    ) 

    // 媒体聚焦
    $('#nav li').eq(3).mouseenter(
        function(){
            $('#m4').css('display','flex')
        }
    ).mouseleave(
        function(){
            $('#m4').css('display','none')
        }
    )
    $('#m4').mouseenter(
        function(){
            $(this).css('display','flex')
        }
    ).mouseleave(
        function(){
            $(this).css('display','none')
        }
    )

    // 联系我们
    $('#nav li').eq(4).mouseenter(
        function(){
            $('#m5').css('display','flex')
        }
    ).mouseleave(
        function(){
            $('#m5').css('display','none')
        }
    )
    $('#m5').mouseenter(
        function(){
            $(this).css('display','flex')
        }
    ).mouseleave(
        function(){
            $(this).css('display','none')
        }
    )    

//二级菜单点中切换文章内容
    yemian8();   
    yemian8_1();   
    //切换到集团概况
    $('#nav_2>li').eq(0).click(function(){       
        yemian8(); 
        yemian8_1();
        window.location.href='/news'
    })
   




    // 轮播图==================================
    var imgCount=3;
    var index=1;
    var intervalId;
    var buttonLi_m=$('.indecate_1').find('li');//htmlCollection集合
    // var buttonLi_m=document.getElementsByClassName('indecate_1')
    // console.log(buttonLi_m)
    //自动轮播功能 使用定时器
    autoNextPage();
    function autoNextPage(){
        // console.log('开始轮播')
        intervalId=setInterval(function(){
                nextPage(true);
        },3000);
    }

    //当鼠标移入 停止轮播
    $('.banner').mouseover(function(){
        // console.log('鼠标移入，停止轮播');
        clearInterval(intervalId);
    });

    //当鼠标移出 开始轮播
    $('.banner').mouseout(function(){
        // console.log('鼠标移出，开始轮播');
        autoNextPage(true);
    });
    
    
    clickButton();
    function clickButton(){   
           
        var length=buttonLi_m.length;
        for(var i=0;i<length;i++){
            buttonLi_m[i].onclick=function(){
                console.log(buttonLi_m[i])
                $(buttonLi_m[index-1]).removeClass('active');
                if($(this).attr('index')==1){
                    index=3;
                }else{
                    index=$(this).attr('index')-1;                   
                }                         
                nextPage(true);        
            }            
        }                
    }
    


    

    // 图片左右移动
    function nextPage(next){
        // var imgWidth=$('.wrapper img').css('width');
        var itemWidth=$('.wrapper .item').outerWidth(true)
        // var imgWidth_num=imgWidth.replace('px','');
        var imgWidth_num=itemWidth;
        var targetLeft=0;           
        //当前的圆点去掉active样式
        $(buttonLi_m[index-1]).removeClass('active');
        if(next){//往后走
            if(index==3){//如果是最后一张 直接跳到第一张
                targetLeft=0;                    
                index=1;                   
                // console.log('自动轮播')
            }else{
                index++;
                targetLeft=-imgWidth_num*(index-1);
            }
        }else{//往前走
            if(index==1){//如果是在第一张 直接跳到第三张
                index=3;
                targetLeft=-imgWidth_num*(imgCount-1);
                
            }else{
                index--;
                targetLeft=-imgWidth_num*(index-1);
            }
        }

               
        $('.wrapper').animate({left:targetLeft+'px'});
        // console.log($('.wrapper'))
        //更新后的圆点加上样式
        $(buttonLi_m[index-1]).addClass('active');
        
    }
    



})



    


