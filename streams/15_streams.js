const { createReadStream } = require("fs");
const testFile = createReadStream("./content/first.txt", 'utf-8');
testFile.on("data", (chunk) => {
  console.log(chunk);
});
testFile.on("end", () => console.log("Read successfull"));
