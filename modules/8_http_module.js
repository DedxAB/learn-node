const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home Page");
  } else if (req.url === "/about") {
    res.end("About Page");
  } else {
    res.end(
      `<h1>Oops!</h1>
      <p>We can't process your request</p>
      <a href="/">Go back</a>`
    );
  }
});
server.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
