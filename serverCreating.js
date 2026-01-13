const http = require("http");

//Create a server
const app = http.createServer((request, response) => {
  response.end("Hello from the server");
  console.log("A new request received");
});

//Start the Server
app.listen(8000, "127.0.0.1", () => {
  console.log("Server has started!");
});
