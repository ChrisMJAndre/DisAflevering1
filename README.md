Github Repository - Godkendelsesopgave 1
UDP Pinger med RTT og packet loss 


 


# UDP-Server
I dag skal vi lave en UDP-server, der også skal bruges til jeres første aflevering i DIS. Bare rolig, hvis I ikke formår at lave den, vil jer lægge en færdig server op i slutningen af timen. 

### Step 1
For at lave en UDP-server, skal I ikke længere bruge 'net', men i stedet importerer pakken "dgram" og gemme den i en variabel. Dokumentation kan findes her: https://nodejs.org/api/dgram.html. Det vigtige at lægge mærke til er Event: 'listening', Event: 'message', socket.adress() og socket.send().

### Step 2
Lav en variabel i kalder 'server' og lav en UDP-socket ved at skrive *Variabel navn fra step 1*.createSocket("udp4").

### Step 3
Lav nu en .on funktion, der trigger, hvis serveren modtager en besked. Log eventuelt den modtagne data i konsollen. 

### Step 4
I denne funktion skal i også bruge '.send' til at sende at datagram tilbage til clienten. Denne '.send'-metode tager en række parameter med. Dermed kræver det også en besked pakket som en buffer (Buffer.from("besked")). Kig i dokumentationen og se om I kan regne den ud ;)

### Step 5
Afsluttende, lav en .bind der tager to argumenter (jeres valgte port og jeres IP-adresse) med i.

Når I har lavet dette, burde I have en fungerende UDP-server. Dermed kan I begynde på opgaven Irfan har lagt ud.
