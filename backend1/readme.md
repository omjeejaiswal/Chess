installization process -- 

step 1-  pwd
step 2-  cd backend1
step 3 -  npm init -y    ----------// for package.json   
step 4 -  npx tsc --init    

to run the backend

- tsc -b

- node dist/index.js

to run frontend code

- npm run dev

websocket 
npm i ws
npm i types/ws

for complie the server - ts to js
PS E:\C Program\code\..Project\Chess\backend1> tsc -b
PS E:\C Program\code\..Project\Chess\backend1> node dist/index.js 


on  go to google chrome postwoman(hoppscotch) 

go to realtime for webSocket : 

rember the local port was : ws://localhost:8080

now connect
REMEBER OPEN TO POSTWOMAN(hoppscotch) THEN CONNECT BOTH OF IT.

now write for testing your project 
in Tab 1 of postwoman/hoppscotch
in JSON format
{
  "type": "init_game"
}

and rember to send 
Then, write
in Tab 2 of postwoman/hoppscotch
in JSON format
{
  "type": "init_game"
}
and rember to send 

then you received message.  



next step 

now to tab1  -- Start from white 
{
  "type": "move",
  "move": {
    "from" : "a2",
    "to": "a3"
  }
}

then black moves ---- 
{
  "type": "move",
  "move": {
    "from" : "a7",
    "to": "a6"
  }
}

then also check the white moves also -- 
it was a knight moves

{
  "type": "move",
  "move": {
    "from": "g1",
    "to": "f3"
  }
}
