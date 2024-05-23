//importo moduli necessari
const fs = require("fs"); //import di fs (FileSystem) per gestire i file
const path = require("path"); //import di path per ottenere le path assolute dei file

//funzione di lettura di un generico file json
const readFile = (fileName) => {
  const filePath = path.join(__dirname, fileName);
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

//funzione di scrittura di un generico file json
const writeFile = (fileName, newData) => {
  const filePath = path.join(__dirname, fileName);
  const newDataString = JSON.stringify(newData);
  fs.writeFileSync(filePath, newDataString);
};

module.exports = {
  readFile,
  writeFile,
};
