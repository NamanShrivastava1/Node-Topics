const http = require("http");

const PORT = 3000;
// const HOST = "127.0.0.1";

const server = http.createServer((req, res) => {
  //   res.writeHead(200, { "content-type": "text/plain" });
  //   res.end("Hello, World!");

  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ id: 1, name: "John Doe" }));
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Us</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("404 Not Found");
  }
});

// Example fetching data from a public API
http
  .get("http://api.open-notify.org/astros.json", (res) => {
    let data = "";

    // A chunk of data has been received.
    res.on("data", (chunk) => {
      data += chunk;
    });

    // The whole response has been received.
    res.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.error("Error: " + err.message);
  });

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
