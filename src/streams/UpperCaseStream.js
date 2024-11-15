const { Transform } = require("stream");

class UpperCaseStream extends Transform{
    _transform(chunk, encoding, callback){
        const data = JSON.parse(chunk.toString())
        data.name = data.name.toUpperCase()
        callback(null, Buffer.from(JSON.stringify(data)))
    }
}

module.exports = UpperCaseStream