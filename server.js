const express = require('express');
const http = require('http');
const app = require('./app');
const socketIo = require('socket.io');
const port = process.env.PORT || 3005; 

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
    console.log('Client connected');
    
    // Event listener to fetch leads
    socket.on('fetch_leads', async () => {
        try {
            const leads = await Lead.findAll(); 
            io.emit('leads_data', leads); 
        } catch (error) {
            console.error('Error fetching leads:', error);
        }
    });
});



server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


