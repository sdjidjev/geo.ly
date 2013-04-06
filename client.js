var ws= require('ws')


//hardcode, put on cloud server later
var con = new WebSocket ("ws://10.22.35.212:8080")


function joinRoom(roomId) {
    var host = false;  //joining a room, not a host
    if (roomId == undefined) {
        roomId = makeRoomId();  //creating a new room, they are a host
        host = true;
    }

    con.send(JSON.stringify({type: "join", roomId: roomId, host: host});
}

function makeRoomId() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ ){
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return text;
}

function updateLocation(location) {
    con.send(JSON.stringify({type: "location", location: }))  //how to access client location?
}
