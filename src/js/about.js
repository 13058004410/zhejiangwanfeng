$(function(){  
    //取消那个窗口发生改变就刷新页面的事件
    $(window).unbind('resize');

    //自动加载集团概况页面
    yemian1();

    //二级菜单点中变颜色
    $('.nav_2 li').click(function(){
        // console.log(1344)
        $(this).addClass('active').siblings().removeClass('active')
    });

    //二级菜单点中切换文章内容
        //切换到集团概况
        $('#menu_2>li').eq(0).click(function(){
            yemian1();
        })
        //切换到董事长致辞
        $('#menu_2>li').eq(1).click(function(){
            yemian2();
        })
        //切换到组织框架
        $('#menu_2>li').eq(2).click(function(){
            yemian3();
        })
        //切换到集团荣誉
        $('#menu_2>li').eq(3).click(function(){
            yemian4();
        })
        //切换到企业文化
        $('#menu_2>li').eq(4).click(function(){
            yemian5();
        })
        //切换到成员单位
        $('#menu_2>li').eq(5).click(function(){
            yemian6();
        })
        //切换到万丰历程
        $('#menu_2>li').eq(6).click(function(){           
            yemian7();
        })
        
})



