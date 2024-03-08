let http = require('http');
let fs = require('fs');

const port = 3000;

http.createServer((req, res) => {
    res.writeHead(200, 'Content-Type: text/html');
    res.end('<p>Test</p>')
}).listen(port, () => {
    console.log(`Listening on port ${port}`);
});