// imports
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors);

const http = require('http').Server(app);
const io = require('socket.io')(http);

io.on('connection', (client) => {
  client.on('control-left', (message) => {
    console.log('left: %s', message);
  });
  client.on('control-right', (message) => {
    console.log('right: %s', message);
  });
});

// start our server
const server = http.listen(3001, () => {
  console.log(`Server started on port ${server.address().port} :)`);
});
