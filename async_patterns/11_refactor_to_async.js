const { readFile } = require("fs");
const path = require("path");
const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const showText = async () => {
  const first = await getText("./content/first.txt");
  const second = await getText("./content/second.txt");
  console.log(first, second);
};

showText();
