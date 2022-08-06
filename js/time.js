var hour=7;
var minute=0;
var second=0;
function clearHidden(){
    var bottom=$('.act').position().top+$('.act').outerHeight(true);
    $('.act').each(function() {
       if($(this).position().top>=bottom-10){
          $(this).remove();
       }
    });
}
while(true){
    setTimeout(timing, 500) ;
    function timing(){
        second=second+1;
        if (second>=60){
            minute=minute+1;
            second=0;
        }
        if (minute>=60){
            hour=hour+1;
            minute=0;
        }
        if (hour>=24){
            hour=0;
        $("p.time").text("当前时间："+hour+":"+minute+":"+second);
        }
        clearHidden();
      }
    }
