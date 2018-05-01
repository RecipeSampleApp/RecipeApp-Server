const router = require('express').Router()
module.exports = router

router.get('/hello', async (req, res, next) => {
  console.log('this is a good thing')
})

router.use((req, res, next) => {
  const err = new Error('API route not found')
  err.status = 404
  next(err)
})
