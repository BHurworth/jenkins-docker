const http = require('http');

const server = http.createServer((req,res) => {
    console.log("log testing");
    res.write(`<h1 style="color:red; text-align:center;">Welcome to node app</h1>
    <h3 style="color:purple; text-align:center;">This is the updated version!</h3>
    `);
    res.end();
});

server.listen(3000);