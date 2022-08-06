function training(){

}
function sleep(){
    $(document).ready(function(){
          $("p.act").append("<p>你睡了一觉，精神倍儿棒。</p>")
        });
        tili=tili-10;
        $("p.tili").text("体力："+tili+"%"); 
      }

function racing(){
  tili=tili-10;
  baoshi=baoshi-15;
  jishu=jishu+5;
  caifu=caifu-10000;

  $("p.tili").text("体力："+tili+"%");
  $("p.baoshi").text("饱食:"+baoshi+"%");
  $("p.jishu").text("技术:"+jishu);
  $("p.caifu").text("财富:"+caifu+"$");
}
function pee(){

}
function eat(){
  tili=tili+15;
  baoshi=baoshi+30;
  $("p.tili").text("体力："+tili+"%");
  $("p.baoshi").text("饱食:"+baoshi+"%");
}
