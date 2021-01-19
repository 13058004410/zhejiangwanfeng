$(document).ready(function(){

   
    //手机端导航按钮
    $('.icon').click(function(){
        $('.nav-m').toggle()
    })

    // 电脑端当鼠标滑入导航栏li时出现下边框
    $('#nav li').eq(0).mouseenter(
        function(){
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
        // 轮播图==================================
        var imgCount=5;
        var index=1;
        var intervalId;
        var buttonLi=$('.indecate').children();//htmlCollection集合
        var buttonLi_m=$('.indecate_m').children();//htmlCollection集合

        //自动轮播功能 使用定时器
        autoNextPage();
        function autoNextPage(){
            console.log('开始轮播')
            intervalId=setInterval(function(){
                    nextPage(true);
            },3000);
        }

        //当鼠标移入 停止轮播
        $('.banner').mouseover(function(){
            console.log('鼠标移入，停止轮播');
            clearInterval(intervalId);
        });

        //当鼠标移出 开始轮播
        $('.banner').mouseout(function(){
            console.log('鼠标移出，开始轮播');
            autoNextPage(true);
        });

        //点击下一页 上一页的功能
        $('.left').click(function(){
            nextPage(true);
        });
        $('.right').click(function(){
            nextPage(false);
        });

        //轮播指示器的相应功能 事件委托
        clickButton();
        function clickButton(){
            var length=buttonLi.length;
            for(var i=0;i<length;i++){
                buttonLi[i].onclick=function(){
                    $(buttonLi[index-1]).removeClass('active');
                    if($(this).attr('index')==1){
                        index=5;
                    }else{
                        index=$(this).attr('index')-1;
                    }
                        nextPage(true);
                };
            }
        }
        //手机端轮播指示器的相应功能 事件委托
        $(function(){
            var _width=$(window).width();
            // console.log(_width);
            if(_width<768){
                clickButton();
                function clickButton(){
                    var length=buttonLi_m.length;
                    for(var i=0;i<length;i++){
                        buttonLi_m[i].onclick=function(){
                            $(buttonLi_m[index-1]).removeClass('active');
                            if($(this).attr('index')==1){
                                index=5;
                            }else{
                                index=$(this).attr('index')-1;
                            }
                                nextPage(true);
                        };
                    }
                }
            }
        })
        

        // 图片左右移动
        function nextPage(next){
            // var imgWidth=$('.list img').css('width');
            // var imgWidth_num=imgWidth.replace('px','');
            var imgWidth=$('.list img').outerWidth(true);
            var imgWidth_num=imgWidth;
            var targetLeft=0;
            //当前的圆点去掉active样式
            $(buttonLi[index-1]).removeClass('active');
            $(buttonLi_m[index-1]).removeClass('active');
            if(next){//往后走
                if(index==5){//如果是最后一张 直接跳到第一张
                    targetLeft=0;
                    index=1;
                    // console.log('自动轮播')
                }else{
                    index++;
                    targetLeft=-imgWidth_num*(index-1);
                }
            }else{//往前走
                if(index==1){//如果是在第一张 直接跳到第五张
                    index=5;
                    targetLeft=-imgWidth_num*(imgCount-1);
                }else{
                    index--;
                    targetLeft=-imgWidth_num*(index-1);
                }
            }
            $('.list').animate({left:targetLeft+'px'});
            //更新后的圆点加上样式
            $(buttonLi_m[index-1]).addClass('active');
            $(buttonLi[index-1]).addClass('active');
        }
})

// 导航栏二级菜单JS代码
$(function(){
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

 

})
 