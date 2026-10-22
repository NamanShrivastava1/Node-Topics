// Convert a standard string into hex characters
const plainText = 'Node.js';
const hexString = Buffer.from(plainText, 'utf8');

console.log(hexString)

const hexStringgg = hexString.toString('hex')
console.log(hexStringgg)

// Output: 4e6f64652e6a73 (Each pair of characters represents one letter)
