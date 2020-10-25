$(function(){
    $.ajax({
        type:'GET',
        dataType:'json',
        contenType:'application/json;charset=UTF-8',
        url:'/luyou/huoqu',
        success:function(data){
            console.log(data);
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li>
                        <a href="#">
                            ${data[i].title}
                        </a>
                        <img src="./img/hot.png" alt="">
                    </li>
                `
            };   
            $('#notice').html(str);
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    });    
    
})