const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    // res.end(fs.readFileSync("./content/big-file.txt", "utf-8"));
    const readFileChunk = fs.createReadStream(
      "./content/big-file.txt",
      "utf-8"
    );
    readFileChunk.on("open", () => {
      readFileChunk.pipe(res); //pipe actually transfer readfile chunk to writefile chunk
    });
    readFileChunk.on("error", (err) => {
      res.end(err);
    });
  })
  .listen(3000, () => {
    console.log("Server running on 3000 port");
  });
