/// <reference path="../typings/node/node.d.ts" />

import setup = require("./app.setup");
import http = require("http");
import ioc from "./ioc";
import request = require("request");

let server:http.Server = http.createServer((request, response) => {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {"Content-Type": "text/plain"});
   
   // Send the response body as "Hello World"
   response.end("Hello World\n");
});
server.listen(8080);

request.post(
    "http://localhost:8080",
    { form: { key: "value" } },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);
