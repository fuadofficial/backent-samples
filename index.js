const { log } = require('console')
const fs = require('fs')

const userList = [
    { name: 'fuad' },
    { name: 'aju' },
    { name: 'saju' },
    { name: 'basi' },
]


// fs.writeFileSync('file2.txt', 'this is file two')
// fs.writeFileSync('userList.json', JSON.stringify(userList, undefined, 4))
// fs.appendFileSync('file43.txt', 'this is user requist \n', (err) => {
//     if (err) throw err
//     console.log('data');
// })
// fs.unlinkSync('file2.txt')
// fs.mkdir('api')

// fs.readFile('file4.txt', 'utf-8', (err, data) => {
//     if (err) throw err
//     console.log(data);
// })

fs.access('file4.txt', (err) => {
    if (err) throw err
    console.log("success");
    
})

// const data = fsnode index.readFileSync('userList.json', 'utf-8')
// const isExist = fs.existsSync('file2.txt')


// console.log('writing completed');
// console.log(isExist);
// console.log(JSON.parse(data));

