//const cloudinary = require('../handlers/cloudi')
//const multer = require('multer')
const mongoose = require('mongoose')
const Form2 = mongoose.model('Form2')
//const moment = require('moment-timezone') 

/*const cloudinary = require('cloudinary').v2
cloudinary.config({
cloud_name: 'katalyst_images',
api_key: process.env.API_ID,
api_secret: process.env.API_SECRET
}) */

exports.fillForm = (req, res) => {
    // req.flash('success','welcome in register page')
     res.render('form2')
   } 

exports.register = async(req, res) => {

  //cloudinary.v2.uploader.upload(req.files.image1.path, 
  //function(result) {console.log(result)}) 
    let sum=0
    let score1,score2,score3,score4,score5,score6,score7,updatedData;

    req.body.investorName = req.body.input1
    
    req.body.whomRepresenting =  req.body.input2
    //input3 Investor Image
    req.body.investorDescription = req.body.input4
    req.body.organisationPart = req.body.input5
    req.body.investorSkills = req.body.input6
    req.body.occupationInvestor = req.body.input7
    req.body.experienceInvestor = req.body.input8 //
    if(req.body.experienceInvestor == 'Not Available')
      {
        score1 = 0
      }
      else{
        score1 = 2
      }

    req.body.pastInvestment = req.body.input9
    req.body.describePastInvestment = req.body.input10
    req.body.successPercentage = req.body.input11 
    req.body.verticalSector = req.body.input12 //
    if(req.body.verticalSector == 'Not Available')
      {
        score2 = 0
      }
      else{
        score2 = 2
      }

    req.body.horizontalSector = req.body.input13 //
    if(req.body.horizontalSector == 'Not Available')
      {
        score3 = 0
      }
      else{
        score3 = 2
      }

    req.body.investorLocation = req.body.input14 //
    if(req.body.investorLocation == 'Not Available')
      {
        score4 = 0
      }
      else{
        score4 = 2
      }

    req.body.projectStage = req.body.input15
    req.body.prefferedBussiness = req.body.input16 
    req.body.prefferedPlatform = req.body.input17
    req.body.investorExpectation = req.body.input18 
    req.body.investType = req.body.input19  //
    if(req.body.investType == 'Not Available')
      {
        score5 = 0
      }
      else{
        score5 = 2
      }

    req.body.investorType = req.body.input20 //
    if(req.body.investorType == 'Not Available')
      {
        score6 = 0
      }
      else{
        score6 = 2
      }

    req.body.rangeInvestment = req.body.input21 //
    if(req.body.rangeInvestment == 0)
      {
        score7 = 0
        updatedData = 0
      }
      else{
        score7 = 2
        updatedData = req.body.rangeInvestment
      }



    req.body.rangeEquity = req.body.input22 
    req.body.rangeValuation = req.body.input23 
    req.body.investmentProcedure = req.body.input24 
    req.body.activeEmailId = req.body.input25
    req.body.activePhone = req.body.input26 
    req.body.socialLinks = req.body.input27 

    //after huge calculations and updated data
    sum = score1+score2+score3+score4+score5+score6+score7
    req.body.profileCompletionScore = sum;
    req.body.rangeInvestment = updatedData

            
    const newform = new Form2(req.body)
    await newform.save()
    res.redirect('/pref')
    console.log(newform)
  }