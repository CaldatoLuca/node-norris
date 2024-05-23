//importo moduli necessari
require("dotenv").config(); //import di dotenv per usare variabili env
const http = require("http"); //import di http per creare il mio server

//varibili server
const port = process.env.PORT;
const host = process.env.HOST;

//funzioni gestione json
const { readFile, writeFile } = require("./utility");

//creazione del server
const server = http.createServer((req, res) => {
  const jokes = readFile("norrisDb.json");

  switch (req.url) {
    //HOME
    case "/":
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });

      fetch("https://api.chucknorris.io/jokes/random")
        .then((response) => response.json())
        .then((data) => {
          const updatedJokes = [...jokes, data.value];
          writeFile("norrisDb.json", updatedJokes);

          let html = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Chuck Norris Jokes</title>
            <style>
              body { font-family: Arial, sans-serif; margin: 20px; background-color: rgb(21, 21, 21) }
              ul { list-style-type: none; padding: 0; }
              li { background: rgb(199, 54, 89); color: rgb(238, 238, 238); margin: 10px 0; padding: 10px; border-radius: 4px; }
              h1 { text-align: center; color: rgb(169, 29, 58) }
            </style>
          </head>
          <body>
            <h1>Chuck Norris Jokes</h1>
            <ol>
        `;

          updatedJokes.forEach((joke) => {
            html += `<li>${joke}</li>`;
          });

          html += `
            </ol>
          </body>
          </html>
        `;

          res.end(html);
        });

      break;

    //FAVICON
    case "/favicon.ico":
      res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
      res.end();
      break;

    //PAGINA NON TROVATA
    default:
      res.writeHead(404, { "Content-Type": "text/html" });
      res.end("<h1>Pagina non trovata</h1>");
      break;
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
