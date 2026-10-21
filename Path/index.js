import path from "path"

const fileName = path.basename("/users/file.txt", ".txt")
// console.log(fileName)

const dirName = path.dirname("/users/file.txt", ".txt")
// console.log(dirName)

const extensionName = path.extname("/users/file.txt")
// console.log(extensionName)

const fullPath = path.join(__dirname(), 'uploads', 'images', 'avatar.png');
console.log(fullPath)

const absolutePath = path.resolve('folder', 'file.txt');
// console.log(absolutePath)

const parsed = path.parse('/home/user/dir/file.txt');
// console.log(parsed)