const http = require('http');
const fs = require('fs')

console.log(`Hello world`)

const requestListener = function (req, res) {
  res.writeHead(200, {'content-type': 'text/html'});
  fs.createReadStream('index.html').pipe(res);
}

const server = http.createServer(requestListener);

const port = 8000;
server.listen(port, () => {
  console.log(`Server running at port ${port}`)
});
