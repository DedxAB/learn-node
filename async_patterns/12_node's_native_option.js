const { readFile, writeFile } = require("fs");
const util = require("util");
const readPromise = util.promisify(readFile);
const writePromise = util.promisify(writeFile)
const getText = async () => {
  try {
    const first = await readPromise("./content/first.txt", "utf8");
    const second = await readPromise("./content/second.txt", "utf8");
    await writePromise('./content/native-result.txt', `This is the native-result data that is to insert`)
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
getText();
