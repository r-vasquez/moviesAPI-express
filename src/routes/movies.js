const { Router } = require('express')
const router = Router()
const _ = require('underscore')

const movies = require('../sample.json')

router.get('/', (req, res) => {
  res.json(movies)
})

router.post('/', (req, res) => {
  const { title, year, director } = req.body

  if (title && year && director) {
    const rank = movies.length + 1
    const newMovie = { rank, ...req.body }
    movies.push(newMovie)
    res.json(movies)
  } else {
    res.status(500).json({ error: 'Error, wrong petition' })
  }
})

router.put('/:rank', (req, res) => {
  const { rank } = req.params
  const { title, year, director } = req.body

  if (title && year && director) {
    _.each(movies, (movie, i) => {
      if (movie.rank === rank) {
        movie.title = title
        movie.year = year
        movie.director = director
      }
    })
    res.json(movies)
  } else {
    res.status(500).json({ error: 'Error, wrong petition' })
  }
})

router.delete('/:rank', (req, res) => {
  const { rank } = req.params
  _.each(movies, (movie, i) => {
    if (movie.rank === rank) {
      movies.splice(i, 1)
    }
  })
  res.json(movies)
})

module.exports = router
