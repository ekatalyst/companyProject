const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const contactSchema = new mongoose.Schema({

    created: {
    type: Date,
    default: Date.now
    },
    name:{
        type: String,
        trim: true

    },
    email:{
        type: String,
        lowercase: true,
        unique: true,
        //validate:[validator.isEmail,'Invalid Email Address'],
        trim: true
    },
    message:{
        type:String,
        trim:true
    },
    feedback:{
        type:String,
        trim:true
    }

})

module.exports = mongoose.model('Contact', contactSchema)