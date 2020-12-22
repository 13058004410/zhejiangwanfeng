$(function(){

    $('#jituangaikuang').on('mousedown','ul',function(e) { 
        var positionDiv = $(this).offset();
        var distenceX = e.pageX - positionDiv.left;
        console.log(e.pageX)
   
        $(document).mousemove(function(e){
            var x = e.pageX - distenceX;

            x=x-400;
            $('ul').css({
                
                'left': x + 'px'
            });
        });
        
        $(document).mouseup(function() {
            $(document).off('mousemove');
        });
    });
})
