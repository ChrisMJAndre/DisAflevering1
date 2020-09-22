
// General thoughts can be seen in the ReadMe file

// Defining variables, module and socket
const host = "192.168.0.179";
const port = 8080;
var start; 
const dgram = require('dgram');
const client = dgram.createSocket("udp4");

// For Loop that sends 10 messages to the Server 
for (var i = 1; i <= 10; i++){

var message = "ping " + i;
    client.send(Buffer.from(message), port, host, (err) => {
        start = new Date();
        // console.log("Message sent to: " + host + " " + port);
        // Console.log that simply checks that the Client sent the messages to the sever - Commented out after confirmation that the client.send works 
        if(err){
            client.close
        }
    });
    
};
// Variable that counts the incoming pings from the Server
let pings = 0; 

client.on("message", (msg,rinfo) => {
    var end = new Date();
    // Increment by 1 every time the Client recivies a response from the Server 
    pings++;
    // Calculates the Round Trip Time for the Client to send to the Server and the Server to send a message back
    var elapsed = end.getTime() - start.getTime();
    console.log("Message Recived, Elapsed time for ping " + pings + ": " + elapsed + " ms");
})
// Function that checks if the Client recived all of the pings from the Server
const packageControl = () =>{
if (pings < 10) {
    console.log("Package lost");
}   else {
    console.log("Packages Recieved, No Loss")
    }
};
// Timer that allows the packages to return before counting them
setTimeout(packageControl, 100);
