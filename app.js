const fs = require("fs");
const http = require("http");

const html = fs.readFileSync("./Template/index.html", "utf-8");

const app = http.createServer((request, response) => {
  let path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.end("You are in home page");
  } else if (path.toLocaleLowerCase() === "/about") {
    response.end("You are in about page");
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.end("You are in contact page");
  } else {
    response.end("Error 404: page not found");
  }
});

app.listen(8000, "127.0.0.1", () => {
  console.log("Server Started!");
});
