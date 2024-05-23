require("dotenv").config();

const http = require("http");

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html", "utf-8");
  res.end("Hello World");
});

server.listen(port, host, () => {
  console.log(`Server partito al link http://${host}:${port}/`);
});
