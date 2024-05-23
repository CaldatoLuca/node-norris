require("dotenv").config();

const http = require("http");

const port = process.env.PORT || 8080;
const host = process.env.HOST || "localhost";

const server = http.createServer((req, res) => {
  fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((resp) => {
      let data;
      data = resp.value;
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.end(JSON.stringify(data));
    });
});

server.listen(port, host, () => {
  console.log(`Server partito al link http://${host}:${port}/`);
});
