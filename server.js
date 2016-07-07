var nr = require('newrelic');

var http = require("http"),
    port = process.env.PORT || 1881;

var randomNumber = Math.floor(Math.random() * 999999);

var formattedNumber = randomNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

var htmlBody = '<html><head><meta http-equiv="Content-Type" content="text/html" charset="UTF-8"/></head><body><h1 style=text-align:center;padding:20px;>Hello World!</h1><h3 style=text-align:center;>' + formattedNumber + ' people are thinking  "I love node.js" right now!</h3></body></html>';

var server = http.createServer(function(request, response) {
  response.writeHeader(200, {"Content-Type": "text/html"});
  response.write(htmlBody);
  response.end();
});

server.listen(port);
console.log("Server Running on "+port+".\nLaunch http://localhost:"+port);
