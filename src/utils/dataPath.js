const path = require("path");

function readDataPath() {
  return path.join(__dirname, "..", "data", "products.csv");
}

module.exports = { readDataPath };
