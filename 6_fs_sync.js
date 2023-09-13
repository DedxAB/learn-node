const { readFileSync, writeFileSync } = require("fs");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");
// console.log(first)
// console.log(second)

// writeFileSync('./content/new-sync.txt', `this is the data`);
writeFileSync(
  "./content/result-sync.txt",
  `The result of this : ${first}, ${second}`,
  { flag: "a" }
);
