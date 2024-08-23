const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

app.use((req, res, next) => {
    console.log('inside the midleware.......');
    const { auth } = req.body
    if (auth) {
        return next()
    }
    console.log("user not login . please login");

})

app.get('/', (req, res) => {
    res.json({
        message: "hy"
    })
})
app.post('/', (req, res) => {
    return res.json({
        message: "success"
    })

})


const PORT = 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`))