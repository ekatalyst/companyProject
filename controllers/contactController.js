const mongoose = require('mongoose')
const Contact = mongoose.model('Contact')
const moment = require('moment-timezone') 
const {userURL} = require('./imageController')


exports.contactForm = (req, res) => {
  res.render('contact')
} 

exports.usermessage = async(req, res) => {
    
      req.body.name =  req.body.name 
      req.body.email = req.body.email 
      req.body.message = req.body.message
      req.body.feeback = req.body.feeback 
      const ind = moment.tz(Date.now(), "Asia/Calcutta")

      const newContact = new Contact(req.body)
      await newContact.save() 
      
      res.redirect('/contact')
    }
