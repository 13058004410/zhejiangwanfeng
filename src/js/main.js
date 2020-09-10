$(document).ready(function(){
    $('.icon').click(function(){
        $('.nav-m').toggle()
    })


    $(window).resize(function(){
          location.reload()
        // alert('窗口大小改变了')
    })
        // 轮播图
        var imgCount=5;
        var index=1;
        var intervalId;
        var buttonLi=$('.indecate')[0].children;//htmlCollection集合
        var buttonLi_m=$('.indecate_m')[0].children;//htmlCollection集合

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
            console.log(_width);
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
            var imgWidth=$('.list img').css('width');
            var imgWidth_num=imgWidth.replace('px','');
            console.log(imgWidth_num);
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

