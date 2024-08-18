const express = require('express')
const app = express()
const movieList = require('./movie.json')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/', (req, res) => {
    const { movieName } = req.query;
    const filterMovies = movieList.filter(movie => movie.title.toLocaleLowerCase().includes(movieName.toLocaleLowerCase()))
    res.json({
        results: filterMovies
    })
})

app.post('/', (req, res) => {
    console.log(req.body)
    res.json(movieList)
})

const PORT = 3000
app.listen(PORT, () => console.log(`server running on ${PORT}`))
