const fs = require("fs");
const { faker } = require("@faker-js/faker");
const { readDataPath } = require("./../utils/dataPath");

function generateFakeCsv() {
  console.log("Start generating data...");
  const records = [];
  for (let i = 0; i < 3000000; i++) {
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
    const filePath = readDataPath();
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log("error on saving data", error);
  }
}

function execute() {
  const data = generateFakeCsv();
  saveData(data);
}

execute();
