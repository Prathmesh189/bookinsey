const express = require('express');
const http = require('http');
const app = require('./app');
const socketIo = require('socket.io');
const port = 3307; 

const server = http.createServer(app);
const io = socketIo(server);



server.listen(port, () => {
    console.log(`Server   is running on url http://localhost:${port}`);
});


