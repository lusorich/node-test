const http = require("http");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  if (url === "/") {
    res.write(
      "<body><form method='POST' action='/create-user'><input name='create-user' type='text'><button type='submit'>Send</button></input></form></body>"
    );
    res.statusCode = 200;
    return res.end();
  }
  if (url === "/users") {
    res.write("<body><ul><li>user 1</li><li>user 2</li></body>");
    res.statusCode = 200;
    return res.end();
  }
  if (url === "/create-user" && method === "POST") {
    const body = [];
    req.on("data", chunk => {
      body.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      console.log(message);
      return res.end();
    });
  }
});

server.listen(3030);
