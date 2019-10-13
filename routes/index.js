const express = require('express') 
const passport = require('passport') 
//var multipart = require('connect-multiparty') 
//var multipartMiddleware = multipart() 
const router = express.Router() 
//const storeController = require('../controllers/storeController') 
const userController = require('../controllers/userController') 
const pageviewController = require('../controllers/pageviewController')
//const imageController =  require('../controllers/imageController')
const authController = require('../controllers/authController') 
const contactController = require('../controllers/contactController') 
const formController = require('../controllers/formController') 
const form2Controller = require('../controllers/form2Controller') 
const form3Controller = require('../controllers/form3Controller') 
const form4Controller = require('../controllers/form4Controller') 
const form5Controller = require('../controllers/form5Controller') 
const prefController = require('../controllers/prefController') 
const prefBController = require('../controllers/prefBController') 
const prefvcController = require('../controllers/prefvcController') 
const prefcrController = require('../controllers/prefcrController') 
const prefvc2Controller = require('../controllers/prefvc2Controller') 
const testlinkController = require('../controllers/testlinkController') 
//const fbA = require('../controllers/authController')
//const fbB = require('../controllers/authController')
//const userPassport = require('../controllers/passport') 
const { catchErrors } = require('../handlers/errorHandlers') 

/*router.get('/', (req, res) => {
  //res.send('myth! It works!')
  res.render('login') 
  console.log("positive results")
})   */





router.get('/', userController.homePage) 
router.get('/login', userController.loginForm) 
//router.get('/about', userController.aboutUs) 
// router.get('/dash', authController.isLoggedIn)
// Dashboard
router.get('/dash', authController.isLoggedIn, (req, res) =>
  res.render('dashhome', {
    user : {
        name: req.user.userName,
        email: req.user.email,
        person: req.user
    }
  })
);
// userController.dash) 
router.get('/contact', contactController.contactForm) 
//router.get('/imagetest', imageController.fillForm) 
//router.post('/imagetest', imageController.upload, catchErrors(imageController.resize )) 
router.get('/some/test',testlinkController.testlink)
router.post('/some/test',catchErrors(testlinkController.userforgot))
router.get('/some/test/:token',catchErrors(testlinkController.reset))
router.post('/some/test/:token',testlinkController.resetConfirmedPassword,
  catchErrors(testlinkController.updateUserPassword))
//,catchErrors(testlinkController.resetUpdatePassword))

router.get('/userform', formController.fillForm) 
router.get('/userform2', form2Controller.fillForm) 
router.get('/userform3', form3Controller.fillForm) 
router.get('/pref', prefController.prefpage) 
router.get('/signup-type', userController.signupType ) 
router.get('/prefb', prefBController.prefpage) 
router.get('/userform4', form4Controller.fillForm) 
router.get('/userform5', form5Controller.fillForm) 
router.get('/prefvc2', prefvc2Controller.fillForm) 
router.get('/prefvc', prefvcController.prefpage) 
router.get('/prefcr', prefcrController.prefpage)
router.get('/about-us', pageviewController.aboutPage)
router.get('/news', pageviewController.newsPage) 
router.post('/userform3', catchErrors(form3Controller.register)) 
router.post('/userform4', form4Controller.upload1,catchErrors(form4Controller.register))
router.post('/userform5', catchErrors(form5Controller.register)) 
router.post('/prefvc',catchErrors(prefvcController.userpref)) 
router.post('/prefcr',catchErrors(prefcrController.userpref)) 
router.post('/prefvc2', catchErrors(prefvc2Controller.register))
router.post('/prefb',catchErrors(prefBController.userpref, prefBController.userFilter)) 
router.post('/pref', catchErrors(prefController.userpref)) 
router.post('/userform', catchErrors(formController.register))
router.post('/userform2', catchErrors(form2Controller.register))
router.post('/login', authController.login) 
//router.post('/logout', authController.logout) 
router.get('/register-1', userController.registerForm)
router.get('/register-2', userController.registerForm2)
router.get('/register-3', userController.registerForm3) 
router.post('/contact', catchErrors(contactController.usermessage,contactController.getdata))


// 1. Validate the registration data
// 2. register the user
// 3. we need to log them in
router.post('/register-1',
  userController.validateRegister,
  userController.register,
  authController.login
) 
router.get('/logout', authController.logout) 

module.exports = router 
