const Audio = require('../models/Audio')

class AudioController {
    static addAudio(req,res,next) {
        res.send({
            status: 200,
            message: 'Your file is successfully uploaded',
            link: req.file.cloudStoragePublicUrl
        })
        const {title,description} = req.body
        Audio.create({locationGcp:req.file.cloudStoragePublicUrl,title,description})
        .then(data=>{
            console.log('berhasil');
            
            res.status(201).json(data)
        })
        .catch(next)
    }
    static readAudio(req,res,next){
        Audio.find()
        .then(article=>{
            console.log(article);
            res.status(200).json(article)
        })
        .catch(next)
    }

}

module.exports = AudioController

