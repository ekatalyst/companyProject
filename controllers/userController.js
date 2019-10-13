const mongoose = require('mongoose')
const Individual = mongoose.model('Individual')
const promisify = require('es6-promisify')
const bcrypt = require('bcryptjs') 
const { check } = require('express-validator/check')

exports.homePage = (req, res) => {
  // req.flash('success','welcome in register page')
   res.render('newIndex')
 } 
 
exports.signupType = (req, res) => {
  // req.flash('success','welcome in register page')
   res.render('signup-type')
 } 

 exports.loginForm = (req, res) => {
  // req.flash('success','welcome in register page')
   res.render('login')
 } 
 
exports.registerForm = (req, res) => {
    res.render('signup')
} 

exports.registerForm2= (req, res) => {
    res.render('signup2')
} 

exports.registerForm3 = (req, res) => {
    res.render('signup3')
} 


  exports.validateRegister = async (req, res, next) => {
//  req.sanitizeBody('name')
//  req.checkBody('name', 'You must supply a name!').notEmpty()
  req.checkBody('email', 'That Email is not valid!').isEmail()
  req.sanitizeBody('email').normalizeEmail({
    gmail_remove_dots: false,
    remove_extension: false,
    gmail_remove_subaddress: false
  }) 
  req.checkBody('password', 'Password Cannot be Blank!').notEmpty()
  //req.checkBody('user3', 'filed is mandatory!').notEmpty()
  req.checkBody('password2', 'Confirmed Password cannot be blank!').notEmpty() 
  req.checkBody('password2', 'Oops! Your passwords do not match').equals(req.body.password) 

  const checkUserEmail = await Individual.findOne({ email: req.body.email }) 
  if (checkUserEmail) {
      return  res.render('signup', {
        usererror:'Please use different email'
    })
  }

  const errors = req.validationErrors() 
  if (errors) {
   //req.flash('error', errors.map(err => err.msg)) 
    console.log('your error message is : ',errors)
    req.flash('error', errors.map(err => err.msg))
    console.log('your error message is : ',errors)    
    res.render('signup',{
        usererror:req.flash('error')
    }) 
    return  // stop the fn from running
  }
  next()  // there were no errors!
}      


exports.register = async (req, res, next) => {

    const individual = new Individual({ 
        userName: req.body.userName,
        companyNo: req.body.companyNo,
        userType: req.body.userType,
        currentAddress: req.body.currentAddress,
        userPhone: req.body.userPhone,
        email: req.body.email,
        userAadharNumber: req.body.userAadharNumber,
        userPanNumber: req.body.userPanNumber,
        userFirstCondition: req.body.userCon1,
        userSecondCondition: req.body.userCon2,
        password: req.body.password
    }) 
    
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(individual.password, salt, (err, hash) => {
        if (err) throw err 
        individual.password = hash 
        individual.save()
            .then(individual => {
            // req.flash(
            //   'success_msg',
            //   'You are now registered and can log in'
            // ) 
                // console.log(individual.password) 
                res.redirect('/login') 
            })
            .catch(err => console.log(err)) 
        }) 
    }) 
    
    console.log(individual)
    //res.redirect('/login')
  } 
