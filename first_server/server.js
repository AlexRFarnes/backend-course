const http = require('http');

const server = http.createServer((req, resp) => {
  resp.end('Hello World');
});

server.listen('3000');
