const http = require("http");

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello! My CI/CD DevOps application is working.");
});

server.listen(3000, () => {
    console.log("Server running on port 3000");
});