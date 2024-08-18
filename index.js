const express = require('express')
const app = express()
const movieList = require('./movie.json')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.get('/api/movies', (req, res) => {
    const { movieName } = req.query;
    let filterMovies = []
    if (movieName) {
        const filterMovies = movieList.filter(movie => movie.title.toLocaleLowerCase().includes(movieName.toLocaleLowerCase()))
    } else {
        filterMovies = movieList
    }
    res.json({
        results: filterMovies
    })
})

app.post('/api/movies', (req, res) => {
    const { movieName, movieId } = req.body
    movieList.push({
        id: movieId,
        title: movieName,
        poster_path: '',
    })
    res.json({
        results: movieList
    })
})

app.delete('/api/movies', (req, res) => {
    const { movieName } = req.body
    const fileredMovieList = movieList.filter(movie => movie.title.toLocaleLowerCase() !== movieName.toLocaleLowerCase())
    res.json({
        results: fileredMovieList
    })
})

const PORT = 3000
app.listen(PORT, () => console.log(`server running on ${PORT}`))
