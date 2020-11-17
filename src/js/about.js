$(function(){
    
    //二级菜单点中变颜色
    $('#menu_2>li').click(function(){
        // console.log(11111111);
        $(this).addClass('active').siblings().removeClass('active')
    });

    //二级菜单点中切换文章内容
        //切换到集团概况
        $('#menu_2>li').eq(0).click(function(){
            jituangaikuang();
        })
        //切换到董事长致辞
        $('#menu_2>li').eq(1).click(function(){
            dongshizhangzhici();
        })
        //切换到组织框架
        $('#menu_2>li').eq(2).click(function(){
            zuzhikuangjia();
        })
        //切换到集团荣誉
        $('#menu_2>li').eq(2).click(function(){
            jituanrongyu();
        })


    
})



