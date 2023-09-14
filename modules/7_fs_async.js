const { readFile, writeFile } = require("fs");
readFile("./content/first.txt", "utf8", (error, results) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = results;
  readFile("./content/second.txt", "utf8", (error, results) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = results;
    writeFile(
      "./content/result-async.txt",
      `The result is ${first}, ${second}`,
      (error, results) => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(results);
      }
    );
  });
});
