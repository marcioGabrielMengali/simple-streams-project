const fs = require("fs");
const path = require("path");
const { faker } = require("@faker-js/faker");

function generateFakeCsv() {
  console.log("Start generating data...");
  const records = [];
  for (let i = 0; i < 100000; i++) {
    const name = faker.commerce.product();
    const department = faker.commerce.department();
    const price = faker.commerce.price();
    records.push(`${name},${department},${price}`);
  }
  return records.join(`\n`);
}

function saveData(data) {
  console.log("Saving Data");
  try {
    fs.writeFileSync(path.join(__dirname, "..", "data", "products.csv"), data);
  } catch (error) {
    console.log("error on saving data", error);
  }
}

function execute() {
  const data = generateFakeCsv();
  saveData(data);
}

execute();
