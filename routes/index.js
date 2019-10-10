const router = require('express').Router()
const audioRouter = require('./audioRouter')

router.use('/audio',audioRouter)

module.exports = router