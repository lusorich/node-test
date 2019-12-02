const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === '/') {
    res.write("<body><div>Page</div><form method='POST' action='/message'><input name='msg' type='text'><button type='submit'>Send</button></input></form></body>");
    return res.end();
  } 
  if (url === '/message' && method === 'POST') {
    fs.writeFileSync('message.txt', 'DUMMY');
    console.log(req);
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }
});

server.listen(3012);
