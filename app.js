// const os = require("os");
// const path = require("path");
// const { readFileSync, writeFileSync } = require("fs");
const http = require("http");

// console.log(os.type(), os.release(), os.totalmem(), os.freemem());
// const filePath = path.join("/new_folder", "text.txt");
// console.log(filePath);

// // console.log(path.resolve('Tutorial 1', 'text.txt'));

// const first = readFileSync("./new_folder/sub_folder/text.txt", "utf8");
// const second = readFileSync("./new_folder/sub_folder/text2.txt", "utf8");

// writeFileSync("./new_folder/sub_folder/text3.txt", ` & Testing 3 ...`, {
//   flag: "a",
// });

// console.log(first);
// console.log(second);

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("Hello World!");
  if (req.url === "/about") res.end("Hello World from Mars!");
  res.end(`<h1>OOPS!</h1>
  <p>We Can't seem to find the page you are looking for.</p>
  <a href="/">back home</a>`);
});

server.listen(3001);
