const fs = require("fs");

const logFileName = "activity.log";

const logMessage = `App started at: ${new Date().toISOString()}\n`;

fs.appendFile(logFileName, logMessage, (err) => {
  if (err) {
    console.error("Failed to write log:", err);
    return;
  }
  console.log("Activity logged successfully to", logFileName);
});
