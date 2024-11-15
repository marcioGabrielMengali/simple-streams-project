const path = require("path");

function readDataPath() {
  return path.join(__dirname, "..", "data", "products.csv");
}

function writeDataPath(){
  return path.join(__dirname, '..', 'db', 'db.json')
}

module.exports = { readDataPath, writeDataPath };
