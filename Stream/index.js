const { pipeline, getDefaultHighWaterMark } = require("stream");
const fs = require("fs");
const zlib = require("zlib"); // Built-in compression module

const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

// Flows all data from input.txt to output.txt in chunks
// readStream.pipe(writeStream);

// -----------------
// pipeline(
//   fs.createReadStream("input.txt"),
//   zlib.createGzip(), // Transforms data by compressing it
//   fs.createWriteStream("input.txt.gz"),
//   (err) => {
//     if (err) {
//       console.error("Pipeline failed:", err);
//     } else {
//       console.log("Pipeline succeeded! File compressed.");
//     }
//   },
// );

// -----------------
const readableStream = fs.createReadStream("input.txt", {
  encoding: "utf8",
  // highWaterMark: 3 * 1024,
});

readableStream.on("data", (chunk) => {
  console.log(`--- Received a chunk of ${chunk.length} characters ---`);
  console.log(chunk);
});

readableStream.on("end", () => {
  console.log("Finished reading file.");
});
