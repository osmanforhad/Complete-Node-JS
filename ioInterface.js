/**
 * Reaing Input
 * and
 * Writing Output
 */
const readLine = require("readline");

const Interface = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
});

Interface.question("Please enter your name: ", (name) => {
  console.log("You entered: " + name);
  Interface.close();
});

Interface.on("close", () => {
  console.log("Interface is closed");
  process.exit(0);
});
