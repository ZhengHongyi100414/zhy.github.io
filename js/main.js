var x=0;
var tili=100;
var baoshi=100;
var jiankang=100;
var jishu=100;
var caifu=100000;
var renmai=10;

$(document).ready(function(){
    $("button.training_ground").fadeOut(1);
    $("button.home").fadeOut(1);
    $("button.race").fadeOut(1);
    $("p.time").text();
    $("p.tili").text("体力："+tili+"%");
    $("p.baoshi").text("饱食:"+baoshi+"%");
    $("p.jiankang").text("健康："+jiankang+"%");
    $("p.jishu").text("技术:"+jishu);
    $("p.caifu").text("财富:"+caifu+"$");
    $("p.renmai").text("人脉:"+renmai);
});

$(document).ready(function(){
    $("button#home").click(function(){
    $("button.home").fadeToggle("fast");
    $("button.race").fadeOut("fast");
    $("button.training_ground").fadeOut("fast");
    });
  });
$(document).ready(function(){
    $("button#race").click(function(){
    $("button.race").fadeToggle("fast");
    $("button.training_ground").fadeOut("fast");
    $("button.home").fadeOut("fast");
    });
  });
$(document).ready(function(){
    $("button#training_ground").click(function(){
    $("button.training_ground").fadeToggle("fast");
    $("button.home").fadeOut("fast");
    $("button.race").fadeOut("fast");
    });
  });
function home(){
    console.log("home");
    

}
function training_ground(){
    console.log("training_ground");
    place="training_ground";
}
function race(){
    console.log("race");
    place="race";
}