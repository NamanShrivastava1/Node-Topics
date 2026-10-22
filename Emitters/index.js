const EventEmitter = require("events");

const myEmitter = new EventEmitter();

// myEmitter.on("event", () => {
//   console.log("an event occurred!");
// });

// myEmitter.emit("event");

// console.log(myEmitter.listeners('event'));

// myEmitter.on("userSignup", (username, id) => {
//   console.log(`Welcome email sent to ${username} (ID: ${id})`);
// });

// myEmitter.emit("userSignup", "Alice", 101);

// let m = 0;
// myEmitter.on("event", () => {
//   console.log(++m);
// });

// myEmitter.emit("event"); // Prints: 1
// myEmitter.emit("event"); // Prints: 2

let m = 0;
myEmitter.once("event", () => {
  console.log(++m);
});
myEmitter.emit("event"); // Prints: 1
myEmitter.emit("event"); // Ignored
