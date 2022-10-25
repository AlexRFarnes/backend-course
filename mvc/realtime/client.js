const io = require('socket.io-client');

const socket = io.connect('http://localhost:3000', { reconnection: true });

socket.on('connect', () => {
  console.log('Socket connected from NodeJS');
});

module.exports = socket;
