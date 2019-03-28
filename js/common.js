
$(function(){
    $(".main > li").hover(function (){  
           if($(this).children('ul')){
               var elemCount=$(this).children('ul').children('li').length,
                   elem=$(this).children('ul').children('li');
               for(var i=0;i<elemCount;i++){
                   var currentElem=elem.eq(i);
                   var vari=.3 * (i+1);
                   currentElem.css('animation-delay',+ vari +'s')
               }
           }  
       }); 
        $(".main > li ul").mouseout(function (){  
           vari=1; 
       }); 
   })