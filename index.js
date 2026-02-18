const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");

// mapping URLs to files
const routes = {
  "/": "index.html",
  "/about": "about.html",
  "/contact-me": "contact-me.html",
};

const server = http.createServer((req, res) => {
  // picking the file based on the url
  const fileName = routes[req.url] || "404.html";
  const filePath = path.join(__dirname, fileName);

  // setting 404 status code
  if (!routes[req.url]) {
    res.statusCode = 404;
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end("Server error");
      return;
    }
    res.setHeader("Content-Type", "text/html");
    res.end(data);
  });
});

server.listen(8080, () =>
  console.log("Server is running at http://localhost:8080"),
);
