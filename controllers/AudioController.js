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

    // {$push: {friends: {firstName: "Harry", lastName: "Potter"}}}
    static pushComment(req,res,next){
        Audio.updateOne({_id : req.body._id }, { $push : { comment: req.body.comment }})
        .then( updatedData => {
            console.log(updatedData);
            
            res.status(201).json({updatedData, addedComment: req.body.comment})
        })
        .catch(next)
    }

}

module.exports = AudioController

