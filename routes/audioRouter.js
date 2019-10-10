const router = require('express').Router()
const AudioController = require('../controllers/AudioController')


router.post('/',AudioController.addAudio)

module.exports =router