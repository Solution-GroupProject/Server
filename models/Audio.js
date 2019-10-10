const mongoose = require('mongoose')

let Schema = mongoose.Schema


let audioSchema = new Schema({
    locationGcp : {type:String},
    comment : {type:String}    
},{timestamps:true})

let Audio = mongoose.model('Audio',audioSchema)

module.exports = Audio