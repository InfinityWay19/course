const http = require("http");

const PORT = 3000;

const server = http.createServer(async(request, response) => {
    response.setHeader("Content-Type", "text/plain; charset=utf-8");

    if (request.url === "/") {
        response.statusCode = 200;
        response.write("<h1>Infy</h1> <a href=/contact>Contacts</a>");
        response.end();
    } else if (request.url === '/contact') {
        response.statusCode = 200;
        response.write("infinityway1453@gmail.com <a href=/>Homepage</a>");
        response.end();
    } else {
        response.statusCode = 404;
        response.write("<img src='gst_bg_054_20.jpg' Page does not exist");
        response.end();
    }
})

server.listen(PORT);
console.log("server started");