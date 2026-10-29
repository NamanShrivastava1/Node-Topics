setTimeout(() => {
  console.log("1");
}, 0);
setTimeout(() => {
  console.log("2");
}, 0);
setImmediate(() => {
  console.log("3");
});
setImmediate(() => {
  console.log("4");
});

// If we add a console then it's a blocking code and while it executes the timeoutes will completed and executed, but if we remove the console then the setImmediate will be executed first because it is in the check phase and the timeouts will be executed in the timers phase.
// console.log("Start")
