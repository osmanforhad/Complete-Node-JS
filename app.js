const fs = require("fs");
const http = require("http");

const html = fs.readFileSync("./Template/index.html", "utf-8");

const app = http.createServer((request, response) => {
  let path = request.url;
  if (path === "/" || path.toLocaleLowerCase() === "/home") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hello world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in Home page"));
  } else if (path.toLocaleLowerCase() === "/about") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hello world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in About page"));
  } else if (path.toLocaleLowerCase() === "/contact") {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "my-header": "hello world",
    });
    response.end(html.replace("{{%CONTENT%}}", "You are in Contact page"));
  } else {
    response.writeHead(404, {
      "Content-Type": "text/html",
      "my-header": "hello world",
    });
    response.end(html.replace("{{%CONTENT%}}", "Error 404: Page not found"));
  }
});

app.listen(8000, "127.0.0.1", () => {
  console.log("Server Started!");
});
