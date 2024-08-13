const add = require('./util')
const path = require('path')

console.log(add(100, 20));

console.log(__filename);
console.log(path.parse(__filename));
