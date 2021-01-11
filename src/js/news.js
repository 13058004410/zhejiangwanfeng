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

    // 导航栏二级菜单JS代码====================================
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
        //切换到集团概况
        $('#menu_2>li').eq(0).click(function(){
            yemian7();
        })
        //切换到董事长致辞
        $('#menu_2>li').eq(1).click(function(){
            yemian8();
        })
        //切换到组织框架
        $('#menu_2>li').eq(2).click(function(){
            yemian9();
        })
        //切换到企业文化
        $('#menu_2>li').eq(3).click(function(){
            yemian10();
        })
        $('#menu_2>li').eq(4).click(function(){
            yemian11();
        })




})




