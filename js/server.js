const { mkdirSync } = require('fs');
const WebSocket = require('ws');
const user = new Set();
const usrname = [];
const wss = new WebSocket.Server({port: 8080});

wss.on('connection' , ws =>{
    console.log("start");
    //user.add(ws);
    //socket.send(JSON.stringify(msg));
    ws.on('message' , mssg =>{
        console.log(JSON.parse(mssg));
        var message=JSON.parse(mssg);
        var msg = [];
        ws.name=message.name;
        user.add(ws);
        switch(message.type){
            case "connection":
                usrname.push(message.name);
                msg = {
                    type: "usrconnection",
                    text: message.name,
                    //id: clientID,
                    host: "server",
                    time: message.time,
                    usrInRoom:usrname,
                };
                console.log(msg);
                for (let x of user){
                    x.send(JSON.stringify(msg));
                }
                break;
            case "message":
                msg = {
                    type: "usrmsg",
                    text: message.text,
                    //id: clientID,
                    host: message.name,
                    time: message.time,
                };
                console.log(msg);
                for (let x of user){
                    x.send(JSON.stringify(msg));
                }
                break;
        }
        ws.on('close' , mssg =>{
            usrname.splice(usrname.indexOf(ws.name), 1);
            user.delete(ws);
            var msg = {
                    type: "usrclosed",
                    text: ws.name,
                    //id: clientID,
                    host: "server",
                    time: Date.now(),
                    usrInRoom:usrname,
                };
            for (let x of user){
                x.send(JSON.stringify(msg));
                console.log(msg);
            }
        })
    })
});