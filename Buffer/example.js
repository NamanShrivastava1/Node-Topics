const fs = require("fs").promises;
const path = require("path");

const imagePath = path.join(__dirname, "gifimage.gif");

async function readFileFun() {
  const data = await fs.readFile(imagePath);
  // const stringData = data.toString()
  // console.log(stringData)
  console.log(data);
  console.log(`Buffer allocated. Size: ${data.length} bytes.`);

  if (data[0] !== 0xff || data[1] !== 0xd8 || data[2] !== 0xff) {
    console.log("Invalid File Format: Not a standard JPEG or JPG image.");
  } else {
    console.log("Magic numbers match! This is a valid JPEG or JPG image.");
  }
}
readFileFun();
