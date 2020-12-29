function paomadeng(){
	var imgCount = 5;
        var index = 1;
        var intervalId;
        var span = $('.list').children();//htmlCollection 集合
        //点击下一页 上一页的功能
        $('.left').click(function(){
			nextPage(true);
        });
        $('.right').click(function(){
			nextPage(false);
        });
		
		
        //小圆点的相应功能 事件委托
        clickButtons();
        function clickButtons(){  			    
			var length = span.length;			      
			for(var i=0;i<length;i++){
				span[i].onclick = function(){
					
					$(span[index-1]).removeClass('on');
					if($(this).attr('index')==1){
						index = 11;
						
					}else{
						index = $(this).attr('index')-1;
						console.log(index);
                    }
					nextPage(true);			   
				};
			}
        }

		// 图片左右移动
        function nextPage(next){
            var targetLeft = 0;
			//当前的圆点去掉on样式
            $(span[index-1]).removeClass('on');	
            
			if(next){//往后走
				if(index == 11){//到最后一张，直接跳到第一张
					targetLeft = 0;
					index = 1;
				}else{
					index++;
					targetLeft = -115*(index-1);
					
				}
		   
			}else{//往前走
				if(index == 1){//在第一张，直接跳到第五张
					index = 11;
					targetLeft = -115*(imgCount-1);
				}else{
					index--;
					targetLeft = -115*(index-1);
				}       
			}
			$('.list').animate({left:targetLeft+500+'px'});
			
			//更新后的圆点加上样式
			$(span[index-1]).addClass('on');             
        }
}





// $(function(){

//     $('#jituangaikuang').on('click','li',function(e){
//         var __this=$(this);
//         // console.log(__this);
//         var lis=$('#jituangaikuang li')
//         $(document).mousemove(function(e){
//             var X=e.pageX;
//             __this.addClass('active').siblings().removeClass('active');
//         });
//     })
    
    


//     $('#jituangaikuang').on('mousedown','ul',function(e) { 
//         var positionDiv = $(this).offset();
//         var distenceX = e.pageX - positionDiv.left;
//         // console.log(e.pageX)
   
//         $(document).mousemove(function(e){
//             var x = e.pageX - distenceX;
//             x=x-400;
//             $('ul').css({               
//                 'left': x + 'px'
//             });

//         });
        
//         $(document).mouseup(function() {
//             $(document).off('mousemove');
//         });
//     });
// })
