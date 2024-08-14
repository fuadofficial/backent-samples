const fs = require('fs')

const userList = [
    { name: 'fuad' },
    { name: 'aju' },
    { name: 'saju' },
    { name: 'basi' },
]

fs.writeFileSync('file2.txt', 'this is file two')
fs.writeFileSync('userList.json', JSON.stringify(userList, undefined, 4))

const data = fs.readFileSync('userList.json', 'utf-8')
const isExist = fs.existsSync('file2.txt')


console.log('writing completed');
console.log(isExist);
console.log(JSON.parse(data));

