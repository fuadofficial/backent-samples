const express = require('express')
const app = express()
const movieList = require('./movie.json')


app.get('/', (req, res) => {
    res.json(movieList)
})


const PORT = 5000;
app.listen(PORT, () => console.log(`server running on ${PORT}`))