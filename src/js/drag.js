
		var imgCount = 6;
		var index = 1;
		var span = $('.list').children();//htmlCollection 集合
		//点击下一页 上一页的功能
		function youbian(){
			console.log(1688);
			nextPage(false);
		}
		function zuobian(){
			console.log(1688);
			nextPage(true);
		}
			
			
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
                    }
                    console.log(index)
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


