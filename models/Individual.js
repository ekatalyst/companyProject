const mongoose = require('mongoose')
const Schema = mongoose.Schema
mongoose.Promise = global.Promise
const md5 = require('md5')
const validator = require('validator')
const mongooseErrorHandler = require('mongoose-mongodb-errors')
const passportLocalMongoose = require('passport-local-mongoose')

const individualSchema = new mongoose.Schema({
    userName:{
        type:String,
    },
    companyNo: {
        type: String,
    },
    currentAddress:{
        type:String,        
    },
    userPhone:{
        type:Number,        
    },
    userType: {
        type: String,
    },
    email:{
        type: String,
        lowercase: true,       
    },
    userAadharNumber:{
        type:Number,
        trim:true
    },
    userPanNumber:{
        type:String,
        trim:true
    },
    userCon1:{
        type:String,      
    },
    userCon2:{
        type:String,        
    },
    password: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken:String,
    resetPasswordExpires:Date
});

module.exports = mongoose.model('Individual', individualSchema)