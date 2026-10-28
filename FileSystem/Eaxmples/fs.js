import fs from "fs";

// Asynchronus Code (use fs.promise.-- or change in import for direct use "fs/promises")
// async function readFile() {
//   try {
//     const data = await fs.readFile("hello.txt", "utf-8");
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// readFile();

// async function writeFile() {
//   try {
//     const content = "Hello, this is content written by Node.js!";
//     await fs.writeFile("content.txt", content);
//   } catch (error) {
//     console.log(error);
//   }
// }
// // writeFile()

// async function appendFileExample() {
//   try {
//     await fs.appendFile('content.txt', '\nThis text is appended to the bottom.');
//     console.log('Data appended.');
//   } catch (error) {
//     console.error('Error appending data:', error);
//   }
// }
// appendFileExample();

// async function deleteFileExample() {
//   try {
//     await fs.unlink('content.txt');
//     console.log('File deleted successfully.');
//   } catch (error) {
//     console.error('Error deleting file:', error);
//   }
// }
// deleteFileExample();

async function handleDirectory() {
  try {
    // 1. Create a directory
    await fs.mkdir("DemoFolder", { recursive: true });

    // 2. Read the contents of a directory
    const files = await fs.readdir(".");
    console.log("Files in this directory:", files);
  } catch (error) {
    console.error(error);
  }
}
// handleDirectory();

// Synchronous code
async function readFile() {
  try {
    // Note: This will throw an error if "hello.txt" does not exist yet
    const data = fs.readFileSync("hello.txt", "utf-8");
    console.log("Read Data:", data);
  } catch (error) {
    console.error("Error reading file:", error.message);
  }
}
// readFile();

async function writeFile() {
  try {
    const content = "Hello, this is content written by Node.js!";
    fs.writeFileSync("content.txt", content);
    console.log("File written successfully.");
  } catch (error) {
    console.error("Error writing file:", error.message);
  }
}
// writeFile();

async function appendFileExample() {
  try {
    fs.appendFileSync("content.txt", "\nThis text is appended to the bottom.");
    console.log("Data appended.");
  } catch (error) {
    console.error("Error appending data:", error.message);
  }
}
// appendFileExample();

async function deleteFileExample() {
  try {
    fs.unlinkSync("content.txt");
    console.log("File deleted successfully.");
  } catch (error) {
    console.error("Error deleting file:", error.message);
  }
}
// deleteFileExample();

// Read file asynchronously with callback
// fs.readFile('content.txt', 'utf8', (err, data) => {
//   if (err) {
//     console.error('Error reading file:', err);
//     return;
//   }
//   console.log('File content:', data);
// });

// For binary data (like images), omit the encoding
fs.readFile("a.jpeg", (err, data) => {
  if (err) throw err;
  // data is a Buffer containing the file content
  console.log("Image size:", data.length, "bytes");
});
