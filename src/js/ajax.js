$(function(){
    //通知公告列表的ajax请求
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
    //总部新闻列表的ajax请求
    $.ajax({
        type:'GET',
        dataType:'json',
        url:'/luyou/huoqu_2',
        contentType:'application/json;charset=UTF-8',
        success:function(data){
            var str='';
            for(var i=0;i<data.length;i++){
                str+=`
                    <li>
                        <img src="./img/index_icon.jpg" alt="">
                        <a href="#">
                            ${data[i].title}
                        </a>
                        <span>${data[i].date}</span>
                    </li>
                `
            }
            $('#news-list').html(str);
        },
        error:function(e){
            console.log(e.status);
            console.log(e.responseText);
        }
    });   
    
})