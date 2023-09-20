const fs = require("fs");
// const readStreamFile = fs.createReadStream("./content/big-file.txt");
const readStreamFile = fs.createReadStream("./content/big-file.txt", {
  highWaterMark: 900000,
  encoding: "utf-8",
});

// default 64kb
// last buffer - remainder
// highWaterMark - control size

readStreamFile.on("data", (chunks) => {
  // console.log(`${chunks.length} and the data is ${chunks}`);
  console.log(chunks);
});
readStreamFile.on("error", (err) => console.log(err));

// for (let i = 0; i < 100000; i++) {
//   fs.writeFileSync("./content/big-file.txt", `This is data ${i}\n`, {
//     encoding: "utf-8",
//     flag: "a",
//   });
// }
