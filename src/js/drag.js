(function($) {
	$.fn.exist = function(){ 
		
	 if($(this).length>=1){
			
	  return true;
	 }
	 return false;

	};
})(jQuery);


$(function(){
	.when(.ajax,$.ajax()).then(function(){})
	var imgCount = 6;
		var index = 1;
		
		var span = $('.list').children();//htmlCollection 集合
		if(span.length>0){
			console.log(span);
		}

		//点击下一页 上一页的功能
		$('#jituangaikuang').on('click','a',function(e){
			// var id=e.target.id;
			// console.log($(this));
			if($(this).attr('id')=='left'){
				nextPage(true)
			}else{
				nextPage(false)
			}
			// var a=$(this)			
			// for(var i=0;i<a.length;i++){
			// 	if(a.eq(1).attr('id')=='right'){
			// 		console.log(1677)
			// 		nextPage(true)
			// 	}else{
			// 		nextPage(false)
			// 	}
			// }
		});			
			
		// $('#jituangaikuang').on('click','a',function(e){
		// 	var right=$('#right').attr('id')			
		// 	if(right=='right'){
		// 		// console.log(right)
		// 		nextPage(false);
		// 	}
		// });	
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

})

