const http = require("http");
const url = require("url");

http.createServer(
    function(request, response) {
        response.write("<h1>Dados da Query String</h1>");
        const result = url.parse(request.url);
        console.log(result);
        for(const key in result.query){
            response.write(`[${key}] ${result.query[key]}`)
        }
        response.write("<br><br>");
        for (const key in result.query) {
            response.write(result.query[key])
        }
        response.end();
    }
).listen(3000);

console.log("Server on!");