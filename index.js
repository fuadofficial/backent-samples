const express = require('express')
const app = express()
const userList = [
    { name: 'fuad' },
    { name: 'aju' },
    { name: 'kappu' },
]

app.get('/', (req, res) => {
    res.json(userList)
})


const PORT = 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`))