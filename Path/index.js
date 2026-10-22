// import path from "path"
const path = require("path");

const fileName = path.basename("/users/file.txt", ".txt");
// console.log(fileName)

const dirName = path.dirname("/users/file.txt", ".txt");
// console.log(dirName)

const extensionName = path.extname("/users/file.txt");
// console.log(extensionName)

// __dirname only used using common js
// Join gives Relative Path and can also give absolute using __dirname.
// const fullPath = path.join(__dirname, 'uploads', 'images', 'avatar.png');
const fullPath = path.join("uploads", "images", "avatar.png");
console.log(fullPath);

// Resolve gives Absolute Path
// const absolutePath = path.resolve('folder', 'file.txt');
const absolutePath = path.resolve("uploads", "images", "avatar.png");
console.log(absolutePath);

console.log(path.join("/a", "/b", "c")); // Returns: '/a/b/c'
console.log(path.resolve("/a", "/b", "c")); // Returns: '/b/c' (Starts over at /b)

const parsed = path.parse("/home/user/dir/file.txt");
// console.log(parsed)

const stringPath = path.format(parsed);
// console.log(stringPath)
