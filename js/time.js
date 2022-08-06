year=2020
month=1
day=1
hour=7
minute=0
second=0
while(true){
    setTimeout(timing, 500) 
    function timing(){
        second=second+1
        if (second>=60){
            minute=minute+1
        }
        if (second>=60){
            minute=minute+1
        }
        if (second>=60){
            minute=minute+1
        }
        if (second>=60){
            minute=minute+1
        }
    }



    
    $("p.time").text("当前时间："+time);
    function clearHidden(){
        var bottom=$('.act').position().top+$('.act').outerHeight(true);
        $('.act').each(function() {
           if($(this).position().top>=bottom-10){
              $(this).remove();
           }
        })
      }
}