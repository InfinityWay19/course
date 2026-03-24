const http = require("http");

const PORT = 3000;

// const server = http.createServer((request, response) => {
//     console.log("Someone logged in");
//     console.log(request.method, request.url);

//     response.writeHead(200, { "Content-Type": "text/plain" });

//     response.write("Welcome, this is Infy's server based on Node.js");

//     response.end();
// });

const server = http.createServer(async(request, response) => {
    response.setHeader("Content-Type", "text/plain, charset=utf-8");

    if (request.url === '/') {
        //main page
        response.statusCode = 200;
        response.write("Main page");
        response.end();
    } else if (request.url === '/about') {
        //about me page
        response.statusCode = 200;
        response.write("Start page of file-transfer");
        response.end();
    }else if (request.url === '/stats') {
        const data = await fetch("https://gusic.xyz/stats");
        const jsonData = await data.json();

        response.setHeader("Content-Type", "application/json; charset=utf-8");

        response.statusCode = 200;

        response.write(JSON.stringify(jsonData));
        response.end()
    } else {
        response.statusCode = 404;
        response.write("This page does not exist");
        response.end();
    }
});

server.listen(PORT);
console.log("Server started");