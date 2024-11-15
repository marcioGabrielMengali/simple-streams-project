const { Writable } = require("stream");
const fs = require("fs");
const { readDataPath, writeDataPath } = require("./../utils/dataPath");

class WriteDbStream extends Writable {

    writeData(chunk, path){
      const dataStructure = {
        data: []
      }
      try{
        const file = JSON.parse(fs.readFileSync(path).toString())
        file.data.push(chunk.toString())
        fs.writeFileSync(path, JSON.stringify(file))
      }catch(error){
        if(!error.code === 'ENOENT'){
          throw error
        }
        fs.appendFileSync(path, JSON.stringify(dataStructure))
      }
    }
   _write(chunk, encodign, callback) {
    console.log(`Saving: ${chunk.toString()}`);
    const saveFilePath = writeDataPath();
    this.writeData(chunk, saveFilePath)
    callback();
  }
}

module.exports = WriteDbStream;
