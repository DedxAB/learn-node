const { readFile, writeFile } = require("fs").promises;
const getText = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");
    await writeFile(
      "./content/native-result.txt",
      `This is the native-result another data that is to insert`
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
getText();
