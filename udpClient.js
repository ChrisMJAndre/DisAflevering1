// Defining variables, module and socket
const host = "192.168.0.179";
const port = 8080;
var start; 
const dgram = require('dgram');
const client = dgram.createSocket("udp4");

//For Loop that sends 10 messages to the Server 
for (var i = 1; i <= 10; i++){

var message = "ping " + i;
    client.send(Buffer.from(message), port, host, (err) => {
        start = new Date();
        //console.log("Message sent to: " + host + " " + port);
        if(err){
            client.close
        }
    });
    
};
let pings = 0; 

client.on("message", (msg,rinfo) => {
    var end = new Date();
    pings++;
    var elapsed = end.getTime() - start.getTime();
    console.log("Message Recived, Elapsed time for ping " + pings + ": " + elapsed + " ms");
})

const packageControl = () =>{
if (pings < 10) {
    console.log("Package lost");
}
else {
    console.log("Packages Recieved, No Loss")
    
}
};

setTimeout(packageControl, 100);
