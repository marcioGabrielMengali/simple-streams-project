const { Readable } = require("stream");
class RequestStream extends Readable {
  constructor() {
    super();
    this.data = [];
  }
  _read() {
    setTimeout(() => {
      if (this.data.length > 0) {
        const chunk = this.data.shift();
        console.log({ read: chunk.toString() });
        this.push(chunk);
      }else{
        this.push(null)
      }
    }, 20);
  }

  addData(data) {
    this.data = data;
  }
}

module.exports = RequestStream;
