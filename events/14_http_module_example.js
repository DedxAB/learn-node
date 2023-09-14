const http = require("http");
const server = http.createServer();
server.on("request", (req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    res.end("ABout page");
  } else {
    res.end(`<h1>Opps!</h1>
    <a href='/'>Go back</a>`);
  }
});
server.listen(3000, () => {
  console.log("server listen on 3000 port");
});
