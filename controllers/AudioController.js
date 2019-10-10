const Audio = require('../models/Audio')

class AudioController {
    static addAudio(req,res,next) {
        res.send({
            status: 200,
            message: 'Your file is successfully uploaded',
            link: req.file.cloudStoragePublicUrl
        })
        Audio.create({locationGcp:req.file.cloudStoragePublicUrl})
        .then(data=>{
            console.log('berhasil');
            
            res.status(201).json(data)
        })
        .catch(next)
    }

}

module.exports = AudioController