const socket = new WebSocket("ws://192.168.1.3:8080");
var usr = prompt("用户名");


//connnection
socket.addEventListener("open",(event) => {
    const msg = {
        type: "connection",
        text: "User "+usr+" is connected",
        //id: clientID,
        name: usr,
        time: Date.now(),
    };
    socket.send(JSON.stringify(msg));
    console.log("connected");
});


//get message
socket.onmessage = (msg) =>{
    console.log(JSON.parse(msg.data));
    message=JSON.parse(msg.data);
    const time = new Date(message.time);
    const timeStr = time.toLocaleTimeString();
    switch(message.type){
        case "usrmsg":
            var t=timeStr+"  "+message.host+"     :  "+message.text+"<br>";
            $("#msg").append(t);
            $(".container").scrollTop(innerHeight);
            break;
        case "usrconnection":
            var t=timeStr+"  "+message.host+"     :  User "+message.text+" connected."+"<br>";
            $("#msg").append(t);
            $(".container").scrollTop(innerHeight);
            //for(let x of message.usrInRoom){
                //var t=x+"<br>"
                //$("#userlistbox")=x;//.append(t);
            //}
            $("#userlistbox").html(message.usrInRoom.join("<br>"));
            break;
        case "usrclosed":
            $("#userlistbox").html(message.usrInRoom.join("<br>"));
    }
}


//send message in the input box
$(document).ready(function(){
    $("button").click(function(){

        const msg = {
            type: "message",
            text: $("input").val(),
            //id: clientID,
            name: usr,
            time: Date.now(),
        };
        socket.send(JSON.stringify(msg));
        console.log(msg);
        $("input").val("");
    });
    
});


