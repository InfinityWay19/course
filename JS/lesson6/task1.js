const http = require("http");

const PORT = 3000;

const server = http.createServer((request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.url === "/") {
        response.statusCode = 200;

        response.write("<h1>Infy</h1>");
        response.write("<p><a href='/contact'>Contacts</a></p>");
        response.write("<a href='/api/info'>Information</a>");

        response.end();
    } else if (request.url === "/contact") {
        response.statusCode = 200;

        response.write("infinityway1453@gmail.com");
        response.write("<p><a href='/'>Homepage</a></p>");

        response.end();
    } else if (request.url === "/api/info") {
        const data = {
            serverName: "MyPc",
            version: "1.0.0",
            status: "working"
        };

        response.setHeader("Content-Type", "application/json");

        response.statusCode = 200;

        response.write(JSON.stringify(data))
        response.end();
    } else {
        response.statusCode = 404;
        response.write("<img src='https://as2.ftcdn.net/v2/jpg/04/04/11/85/1000_F_404118542_AM86FXbweYu3E5zc2RreomEIEYMAEh4E.jpg'>");
        // жаль ссылка длинная :(
        response.write("<p>Page does not exist</p>");
        response.end();
    }
})

server.listen(PORT);
console.log("server started");