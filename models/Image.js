const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const imageSchema = new mongoose.Schema({

    imageUrl:{
        type:String,
        ref: 'User',
        trim:true
    }

})

module.exports = mongoose.model('Image', imageSchema)