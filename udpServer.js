 // Importing a module and defining the socket 
 const dgram = require("dgram");
 const server = dgram.createSocket("udp4");

server.on("listening", () => {
    const address = server.address();
    console.log(`server listening ${address.address}:${address.port}`);
});

server.on("message",(msg,rinfo)=>{
    console.log(`server got: ${msg} from ${rinfo.address}:${rinfo.port}`);
    server.send(Buffer.from("besked"),rinfo.port, rinfo.address);
});

server.bind(8080,"0.0.0.0" )
