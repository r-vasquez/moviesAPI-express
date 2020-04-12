const { Router } = require('express')
const router = Router()

const axios = require('axios')

router.get('/', async (req, res) => {
  const { data: response } = await axios('https://jsonplaceholder.typicode.com/users')
  res.json(response)
})

module.exports = router
