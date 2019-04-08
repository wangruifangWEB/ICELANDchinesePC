
$(function(){
    $('.main li').mouseenter(function(){ 
        if($(this).children('ul')){
            $(this).children('ul').css('display','block'); //改变初始化样式
           var elemCount=$(this).children('ul').children('li').length,
               elem=$(this).children('ul').children('li');
            
           for(var i=0;i<elemCount;i++){
               var currentElem=elem.eq(i);
               var vari=.3 * (i+1);
               currentElem.css('animation-delay',+ vari +'s')
           }
       }
    }).mouseleave(function(){
        vari=1; //重置变量
        $(this).children('ul').css('display','none');//初始化
    });  
   })