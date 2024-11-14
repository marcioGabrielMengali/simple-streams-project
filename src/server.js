const http = require('http');

const httpServer =  async (req, res) => {
    console.log('test');
}

const server = http.createServer(httpServer)

server.listen(3333, () => {
    console.log('Server is running on port 3333..');
})