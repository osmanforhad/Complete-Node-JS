const fs = require("fs");
console.log("program has started");

fs.readFile("./Files/input.txt", () => {
  console.log("File read complete");

  //STORED IN - 1st PHASE
  setTimeout(() => {
    console.log("Timer call back executed");
  }, 0);

  //STORED IN - 3rd PHASE
  setImmediate(() => {
    console.log("set immidiate callback executed");
  });

  process.nextTick(() => {
    console.log("process.NextTick call back executed");
  });
});

console.log("program has completed");
