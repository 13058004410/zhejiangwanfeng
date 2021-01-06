// (function($) {
// 	$.fn.exist = function(){ 
		
// 	 if($(this).length>=1){
			
// 	  return true;
// 	 }
// 	 return false;

// 	};
// })(jQuery);


function paomadeng(){
	var imgCount = 6;
		var index = 1;		
		// var span = document.getElementById('jituangaikuang').childNodes;	//htmlCollection 集合
		var span = document.getElementById('jituangaikuang').children;	//htmlCollection 集合
		span=span[0].children[0].children;
		// console.log(span[0].children[0].children)
		// console.log((span[0].childNodes[0].childNodes));	
		// var span_1=span[0].childNodes[0].childNodes;
		// for(var i in span_1){
		// 	if(i%2!=0){
		// 		var arr=[];
		// 		arr.push(span_1[i])
		// 		// console.log(arr)
		// 	}
			
		// }
		
		var span = document.getElementById('jituangaikuang').children;//htmlCollection 集合
		span=span[0].children[0].children;
		console.log(span);

		//点击下一页 上一页的功能
		$('#jituangaikuang').on('click','a',function(e){
			// var id=e.target.id;
			// console.log($(this));
			if($(this).attr('id')=='left'){
				nextPage(true)
			}else{
				nextPage(false)
			}
			
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
				if(index == 6){//到最后一张，直接跳到第一张
					targetLeft = 0;
					index = 1;
				}else{
					index++;
					targetLeft = -100*(index-1);
				}
				
			}else{//往前走
				if(index == 1){//在第一张，直接跳到第五张
					index = 6;
					targetLeft = -100*(imgCount-1);
				}else{
					index--;
					targetLeft = -100*(index-1);
				}       
			}
			
			$('.list').animate({left:targetLeft+500+'px'});
			//更新后的圆点加上样式
			$(span[index-1]).addClass('on');
			             
        }
}	


