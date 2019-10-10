const router = require('express').Router()
const AudioController = require('../controllers/AudioController')
const multerHelp = require('../helpers/multerHelp')


// router.post('/',AudioController.addAudio)
router.post('/',  multerHelp.multer.single('audio'), multerHelp.sendUploadToGCS,AudioController.addAudio)

// router.post('/',  multerHelp.multer.single('audio'), multerHelp.sendUploadToGCS, (req,res) => {
//     res.send({
//         status: 200,
//         message: 'Your file is successfully uploaded',
//         link: req.file.cloudStoragePublicUrl
//     })
// })

module.exports =router