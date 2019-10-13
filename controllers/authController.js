const passport = require('passport') 
const crypto = require('crypto') 
const mongoose = require('mongoose') 
const Individual = mongoose.model('Individual')
const promisify = require('es6-promisify') 


exports.login = (req, res, next) => passport.authenticate('local', {
    successRedirect: '/dash',
    failureRedirect: '/login',
    failureFlash: true
})(req, res, next) 












exports.logout = (req, res) => {
  req.logout()
 // req.flash('success', 'You are now logged out! 👋') 
  res.redirect('/login') 
} 

exports.isLoggedIn = (req, res, next) => {
  // first check if the user is authenticated
    if (req.isAuthenticated()) {
        //console.log(req.individual) 
        return next() 
  }
  req.flash('errorMsg', 'Ooops you must be logged in to do that!') 
  res.redirect('/login') 
} 
