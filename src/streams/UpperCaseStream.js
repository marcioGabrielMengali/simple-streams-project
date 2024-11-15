const { Transform } = require("stream");

class UpperCaseStream extends Transform{
    _transform(chunk, encoding, callback){
        console.log(chunk);
    }
}
