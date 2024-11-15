const fs = require("fs");
const { readDataPath } = require("./utils/dataPath");
const RequestStream = require("./streams/RequestStream");

class FakeUpload {
  constructor() {
    this.requestStream = new RequestStream();
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
  execute() {
    try{
        console.log('Starting upload file');
        const csv = this.readCsv();
        const csvLines = this.getLines(csv);
        this.requestStream.addData(csvLines);
        this.requestStream.pipe(process.stdout);
    }catch(error){
        console.log('Error on upload file', error);
    }
  
  }
}

const fakeUplaod = new FakeUpload();
fakeUplaod.execute();
