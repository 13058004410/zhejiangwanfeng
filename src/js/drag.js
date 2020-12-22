$(function(){

    $('#jituangaikuang').on('mousedown','#moveList',function(e) { 
        // e.pageX
        var positionDiv = $(this).offset();
        var distenceX = e.pageX - positionDiv.left;
        console.log(e.pageX)
        // var distenceY = e.pageY - positionDiv.top;
        //alert(distenceX)
        // alert(positionDiv.left);
    
        $(document).mousemove(function(e){
            var x = e.pageX - distenceX;
            // var y = e.pageY - distenceY;           
            // if (x < 0) {
            //     x = 0;
            // } else if (x > $(document).width() - $('ul').outerWidth(true)) {
            //     x = $(document).width() - $('ul').outerWidth(true);
            // }
    
            // if (y < 0) {
            //     y = 0;
            // } else if (y > $(document).height() - $('div').outerHeight(true)) {
            //     y = $(document).height() - $('div').outerHeight(true);
            // }
            $('#moveList').css({
                'left': x + 'px'
                // 'top': y + 'px'
            });
        });
        
        $(document).mouseup(function() {
            $(document).off('mousemove');
        });
    });
})
