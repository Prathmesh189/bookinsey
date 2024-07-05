const express = require('express');
const http = require('http');
const app = require('./app');
const socketIo = require('socket.io');
const port = 3005;

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    
    // Event listener to fetch leads
    socket.on('fetch_leads', async () => {
        try {
            const leads = await Lead.findAll(); // Assuming Lead is your Sequelize model
            io.emit('leads_data', leads); // Emit leads data back to the client
        } catch (error) {
            console.error('Error fetching leads:', error);
        }
    });
});

server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


