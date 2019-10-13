const bcrypt = require('bcryptjs') 
const crypto = require('crypto') 
const mongoose = require('mongoose') 
const Individual = mongoose.model('Individual') 
const promisify = require('es6-promisify')
const useremail = require('../handlers/mail')



exports.testlink = (req, res) => {
    
    //mainly for to check each ejs, if we want to.. 

    res.render('reset1')

} 

//FORGOT PASSWORD METHOD
exports.userforgot =  async (req, res) => {
    // 1. See if a user with that email exists
    const user = await Individual.findOne({ email: req.body.email }) 
    if (!user) {
      return  res.redirect('/some/test')
    }
  
    const val = Math.floor(1000 + Math.random() * 9000)
    console.log('fbvhfbjvn' +val)
  
    user.resetPasswordToken = crypto.randomBytes(20).toString('hex')
    user.resetPasswordExpires = Date.now() + 800000
    await user.save()
    const ctoken = user.resetPasswordToken
    const resetURL = `http://${req.headers.host}/some/test/${user.resetPasswordToken}`
    //req.flash('token', `Email has been sent for token ${resetURL}`)
   // res.render('reset1',{ pwd: `Email has been sent for token ${resetURL}`})
    //console.log(ctoken)
    await useremail.usersendmail({
        html: `hey see your password reset link  ${resetURL}`,
        to: req.body.email
    })
  }
  
  exports.reset = async (req, res) => {
          const user = await Individual.findOne({
          resetPasswordToken:req.params.token,
          resetPasswordExpires:{ $gt:Date.now()}
      })


      if(!user) {
          req.flash('ctoken', 'either your token is expired or has invalid')
          return res.redirect('/some/test/')
      } 

      //if user is existing then,
      //console.log('user is exist')
      res.render('reset2')
  }

  //comparing user password with new confirm password

  exports.resetConfirmedPassword = (req, res, next) => {
    if(req.body.password === req.body.pwd2) {
        next()
        return
    }
      //req.flash('pwd','Password is not match')
      res.render('reset2',{ pwd: "password is not match"})
  }


  //update new user password

  exports.updateUserPassword = async (req, res) => {
        const user = await Individual.findOne({
        resetPasswordToken:req.params.token,
        resetPasswordExpires:{ $gt:Date.now()}
    })
    if(!user) {
       // req.flash('token', 'either your token is expired or has invalid22')
        return res.redirect('/about')
    } 
    console.log('no more..')
    //const setPassword = promisify(user.setPassword, user)
    //user.password = req.body.password
    //user.password = hash
    user.password = bcrypt.hashSync(req.body.password, 10)
    user.resetPasswordToken = undefined
    user.resetPasswordExpires = undefined
    await user.save()
    req.flash('errorMsg','password success')
    res.redirect('/login')
    console.log('whooo success')

  }