const { Readable } = require("stream");
class RequestStream extends Readable {
    constructor(){
        super()
        this.data = []
    }
    _read(){
        if(this.data.length > 0){
            const chunk = this.data.shift()
            this.push(chunk)
        }else{
            this.push(null)
        }
    }

    addData(data){
        this.data = data 
    }
}

module.exports = RequestStream