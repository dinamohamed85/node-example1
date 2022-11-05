const http = require('http');
const port = 3000;      //localhost:3000
const fs = require('fs');   // file system

// write text
// const server = http.createServer((req, res) => {
//     res.write("Hello Node");
//     res.end();
// });

// write html file
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.readFile('index.html', (error, data) => {
        if (error) {
            fs.writeHead(404)
            res.write("Error: file not found");
        }
        else
            res.write(data)
        res.end();
    })
});

server.listen(port, (error) => {
    if (error)
        console.log(`something went wrong ${error}`);
    else (error)
    console.log(`server listening on port ...  ${port}`);
});