const http = require("http");
const CreateObjectStream = require("./streams/CreateObjectStream");
const UpperCaseStream = require("./streams/UpperCaseStream");
const WriteDbStream = require("./streams/WriteDbStream");

const httpServer = async (req, res) => {
  const { method, url } = req;
  console.log(`method :: ${method} :: url :: ${url}`);
  if (url === "/upload" && method === "POST") {
    return req.pipe(new CreateObjectStream()).pipe(new UpperCaseStream()).pipe(new WriteDbStream()).on('finish', () => {
      res.writeHead(201).end()
    })
    
  }
};

const server = http.createServer(httpServer);

server.listen(3333, () => {
  console.log("Server is running on port 3333..");
});
