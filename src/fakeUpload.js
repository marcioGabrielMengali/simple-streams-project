const fs = require("fs");
const { readDataPath } = require("./utils/dataPath");
const RequestStream = require("./streams/RequestStream");

class FakeUpload {
  constructor() {
    this.requestStream = new RequestStream();
    this.url = "http://localhost:3333/upload";
  }
  readCsv() {
    const filePath = readDataPath();
    const csvFile = fs.readFileSync(filePath);
    return csvFile;
  }
  getLines(csv) {
    const lines = csv.toString().split(`\n`);
    return lines;
  }

  fetchData() {
    console.log(`fetching data to :: ${this.url}`);
    fetch(this.url, {
      method: "POST",
      body: this.requestStream,
      duplex: "half",
    })
      .then((response) => {
        return response;
      })
      .then((data) => {
        console.log({
          status: data.status,
          statusText: data.statusText
        });
      });
  }

  execute() {
    try {
      console.log("Starting upload file");
      console.log(this.url);
      const csv = this.readCsv();
      const csvLines = this.getLines(csv);
      this.requestStream.addData(csvLines);
      this.fetchData();
    } catch (error) {
      console.log("Error on upload file", error);
    }
  }
}

const fakeUplaod = new FakeUpload();
fakeUplaod.execute();
