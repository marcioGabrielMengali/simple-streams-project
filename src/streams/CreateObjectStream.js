const { Transform } = require("stream");

class CreateObjectStream extends Transform{
    _transform(chunk, encoding, callback){
        const columns = chunk.toString().split(`,`)
        const createObject = {
            name: columns[0],
            department: columns[1],
            price: columns[2]
        }
        callback(null, Buffer.from(JSON.stringify(createObject)))
    }
}

module.exports = CreateObjectStream