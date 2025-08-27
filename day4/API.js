// api.js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello, World!" }));
});

server.listen(4000, () => {
  console.log("API running at http://localhost:4000/");
});
