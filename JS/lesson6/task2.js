const http = require("http");

const PORT=3000;

const server = http.createServer((request, response) => {
    response.setHeader("content-Type", "text/html: charset=utf-8");

    if (request.url === "/") {
        response.statusCode = 200;
        response.write("<h1>Homepage</h1> <a href='/api/info'>Information</a>");
        response.end();
    } else if (request.url === "/api/info") {
        response.statusCode = 200;
        response.setHeader("Content-Type", "application/json");
        response.write(JSON.stringify())
    }
})