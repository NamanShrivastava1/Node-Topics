// Buffer is a global class used to handle and manipulate raw binary data directly in memory.

// const bufAlloc = Buffer.alloc(10); 
// console.log(bufAlloc);

// const bufUnsafe = Buffer.allocUnsafe(10); 
// console.log(bufUnsafe)

// const bufFromString = Buffer.from('Hello'); 
// console.log(bufFromString); 

const buf = Buffer.from('Hello World');
console.log(buf)

// Convert entire buffer back to a UTF-8 string
console.log(buf.toString()); // "Hello World"