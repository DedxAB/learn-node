const { readFile } = require("fs");
const path = require("path");
const getPath = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, data) => {
      if (err) reject(err);
      else {
        resolve(data);
      }
    });
  });
};
getPath("./content/first.txt")
  .then((text) => {
    console.log(text);
  })
  .catch((err) => console.log(err));
