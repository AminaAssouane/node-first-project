const http = require("node:http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Server is running");
});

server.listen(8080, () =>
  console.log("Server is running at http://localhost/8080"),
);
