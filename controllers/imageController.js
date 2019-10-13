const mongoose = require('mongoose')
const Image = mongoose.model('Image')
const multer = require('multer')
const uuid = require('uuid')
const jimp = require('jimp')
//const moment = require('moment-timezone');
const cloudinary = require('cloudinary')
const path = require('path')











exports.fillForm = (req, res) => {
    // req.flash('success','welcome in register page')
     res.render('image')
}
