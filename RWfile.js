/**
 * Reading and Writing
 * To a
 * File
 */
const fileSystem = require("fs");

//Reading a file
let read = fileSystem.readFile("./Files/input.txt", "utf-8", (error, data) => {
  console.log(data);
  console.log("Reading file...");

  let content = `Data read from input.txt: ${data}. \nDate Created ${new Date()}`;
  //Writing a file
  const write = fileSystem.writeFile("./Files/output.txt", content, () => {});
  console.log("File writeen successfully");
});
