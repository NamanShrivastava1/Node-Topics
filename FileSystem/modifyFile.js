const fs = require("node:fs").promises;

async function modifyFile() {
  try {
    // 1. Read the existing file content
    let content = await fs.readFile("content.txt", "utf-8");

    // 2. Modify the content in memory
    content = content.replace("Node.js", "Python");

    // 3. Write the updated content back
    await fs.writeFile("content.txt", content, "utf-8");
    console.log("File modified successfully!");
  } catch (err) {
    console.error("Error modifying file:", err);
  }
}

modifyFile();
