const http = require('http');
const port = 3000;      //localhost:3000

const server = http.createServer((req, res) => {
    res.write("Hello Node");
    res.end();
});
server.listen(port, (error) => {
    if (error)
        console.log(`something went wrong ${error}`);
    else (error)
    console.log(`server listening on port ...  ${port}`);
});