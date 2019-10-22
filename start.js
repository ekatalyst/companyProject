const mongoose = require('mongoose') 
const dotenv = require('dotenv')

// import environmental variables from our variables.env file
require('dotenv').config({ path: 'variable.env' }) 



// Connect to our Database and handle any bad connections
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true }) 
mongoose.set('useCreateIndex', true) 
mongoose.Promise = global.Promise  // Tell Mongoose to use ES6 promises
mongoose.connection.on('error', (err) => {
  console.error(`sir your database error → ${err.message}`) 
}) 

process.on('unhandledRejection', function(reason, promise) {
  console.log(promise) 
}) 

require('./models/Individual')
require('./models/Image')
require('./models/Contact')
require('./models/Form')
require('./models/Form2')
require('./models/Form3')
require('./models/Form4')
require('./models/Form5')

// READY?! Let's go!

require("./handlers/mail")


// Start our app!
const app = require('./app') 
app.set('port', process.env.PORT || 2222) 
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`) 
}) 
