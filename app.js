const express = require('express')
const mongoose = require('mongoose')
const session = require('express-session')
const expressValidator = require('express-validator')
const MongoStore = require('connect-mongo')(session)
const path = require('path')
const passport = require('passport')
const bodyParser = require('body-parser')
const flash = require('connect-flash')
const routes = require('./routes/index')
const errorHandlers = require('./handlers/errorHandlers')
require('./handlers/passport')
require('./handlers/mail')

const app = express() 


app.set('views', path.join(__dirname, 'views'))
//app.engine('html', require('ejs').renderFile)
app.set('view engine', 'ejs')

app.use(express.static(path.join(__dirname + '/public')))

app.use(bodyParser.json()) 
app.use(bodyParser.urlencoded({ extended: true })) 

app.use(expressValidator()) 

// populates req.cookies with any cookies that came along with the request
//app.use(cookieParser()) 


app.use(session({
  secret: process.env.SECRET,
  key: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({ mongooseConnection: mongoose.connection })
})) 

// Passport Config
require('./handlers/passport')(passport);

app.use(passport.initialize()) 
app.use(passport.session()) 


app.use(flash()) 

app.use((req, res, next) => {
  //res.locals.msg = req.flash() 
  res.locals.errorMsg = req.flash('errorMsg')
  //res.locals.token =    req.flash('token')
  res.locals.pwd =      req.pwd
  res.locals.ctoken =    req.ctoken
  res.locals.user = req.user
  res.locals.usererror =    req.usererror
  res.locals.user_data1 = req.user_data1 
  res.locals.user_data2 = req.user_data2 
  res.locals.user_data3 = req.user_data3 
  res.locals.user_data4 = req.user_data4 
  res.locals.user_data5 = req.user_data5 
  res.locals.user_data6 = req.user_data6 
  res.locals.user_data7 = req.user_data7 
  res.locals.user_data8 = req.user_data8 
  res.locals.user_data9 = req.user_data9 
  res.locals.user_data10 = req.user_data10 
  res.locals.user_data11 = req.user_data11 
  res.locals.user_data12 = req.user_data12 
  res.locals.user_data13 = req.user_data13 
  res.locals.user_data14 = req.user_data14 
  res.locals.user_data15 = req.user_data15 
  res.locals.user_data16 = req.user_data16 
  res.locals.user_data17 = req.user_data17 
  res.locals.user_data18 = req.user_data18 
  res.locals.user_data19 = req.user_data19 
  res.locals.user_data20 = req.user_data20 
  res.locals.user_data21 = req.user_data21 
  res.locals.user_data22 = req.user_data22 
  res.locals.user_data23 = req.user_data23 
  res.locals.user_data24 = req.user_data24 
  res.locals.currentPath = req.path 
  next() 
})  



// After allllll that above middleware, we finally handle our own routes!
app.use('/', routes) 


// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound) 

// One of our error handlers will see if these errors are just validation errors
//app.use(errorHandlers.flashValidationErrors) 

// Otherwise this was a really bad error we didn't expect! Shoot eh
//if (app.get('env') === 'development') {
   //Development Error Handler - Prints stack trace 
  //app.use(errorHandlers.developmentErrors) 
//}

// production error handler
//app.use(errorHandlers.productionErrors) 

// done! we export it so we can start the site in start.js
module.exports = app 