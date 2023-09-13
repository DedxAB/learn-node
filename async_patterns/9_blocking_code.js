const http = require("http");
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Home page");
  } else if (req.url === "/about") {
    //   blocking code, this code will block the about page, first it complete the for loop execution and then render the about page
    for (let i = 0; i < 100; i++) {
      for (let j = 0; j < 100; j++) {
        console.log(`i = ${i} and j = ${j}`);
      }
    }
    res.end("ABout page");
  } else {
    res.end(`<h1>Oops!</h1>
        <p>We can't process your request</p>
        <a href="/">Go back</a>`);
  }
});
server.listen(3000, () => {
  console.log("Server listening on 3000 port");
});
