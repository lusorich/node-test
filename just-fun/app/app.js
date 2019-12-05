const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { url, method } = req;
  if (url === '/') {
    res.write("<body><div>Page</div><form method='POST' action='/message'><input name='msg' type='text'><button type='submit'>Send</button></input></form></body>");
    return res.end();
  } 
  if (url === '/message' && method === 'POST') { 
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });
    return req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt', message, (err) => {
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  }
});

server.listen(3012);
