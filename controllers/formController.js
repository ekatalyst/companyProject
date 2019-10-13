const mongoose = require('mongoose')
const Form = mongoose.model('Form')
//const moment = require('moment-timezone');


exports.fillForm = (req, res) => {
    // req.flash('success','welcome in register page')
     res.render('form')
   };

const cloudinary = require('cloudinary').v2
cloudinary.config({
cloud_name: 'katalyst_images',
api_key: process.env.API_ID,
api_secret: process.env.API_SECRET
});

exports.register = async(req, res) => {
    // FOUNDER DATA REFLECTION
  //cloudinary.v2.uploader.upload(req.files.image1.path, 
  //function(result) {console.log(result)});
    let sum=0
    let score1,score2,score3,score4,score5,score6,score7,score8,score9,reqIn;

    req.body.projectName = req.body.input1
    req.body.founderName = req.body.input2
    //input3 is for image

    req.body.founderDescription = req.body.input4
    req.body.projectMotive = req.body.input5
    req.body.userAcheivement = req.body.input6
    req.body.teamAmbition = req.body.input7
    req.body.teamConnection = req.body.input8
    req.body.mentorInfo = req.body.input9
    //input10 image
    req.body.projectDescription = req.body.input11
    req.body.projectStage = req.body.input12    
    if(req.body.projectStage == 'Not Available')
      {
        score1 = 0
      }
      else{
        score1 = 2
      }

      req.body.horizontalSector = req.body.input13
      if(req.body.horizontalSector == 'Not Available')
      {
        score2 = 0
      }
      else{
        score2 = 2
      }
      
      req.body.verticalSector = req.body.input14
      if(req.body.verticalSector == 'Not Available')
      {
        score3 = 0
      }
      else{
        score3 = 2
      }
    
      req.body.projectAcheivement = req.body.input15
      req.body.projectVision = req.body.input16
      //input17 prototype image
      //input18 prototype vedio
      req.body.projectPlatform = req.body.input19
      if(req.body.projectPlatform == 'Not Available')
      {
        score4 = 0
      }
      else{
        score4 = 2
      }
    
      req.body.prefferedBussiness = req.body.input20
      if(req.body.prefferedBussiness == 'Not Available')
      {
        score5 = 0
      }
      else{
        score5 = 2
      }
      req.body.valuationType = req.body.input21
      req.body.investmentType = req.body.input22
      if(req.body.investmentType == 'Not Available')
      {
        score6 = 0
      }
      else{
        score6 = 2
      }
      req.body.projectValuation = req.body.input23
      if(req.body.projectValuation == 'Not Available')
      {
        score7 = 0
      }
      else{
        score7 = 2
      }
      
      req.body.projectPercentage = req.body.input24
      req.body.userLocation = req.body.input25
      if(req.body.userLocation == 'Not Available')
      {
        score8 = 0
      }
      else{
        score8 = 2
      }

      req.body.requiredInvestment = req.body.input26
      if(req.body.requiredInvestment == 0)
      {
        score9 = 0
        reqIn=0
        
      }
     
      else{
        score9 = 2
        reqIn = req.body.requiredInvestment
      }
      
      req.body.fundsUtilization = req.body.input27
      req.body.founderUserEmail = req.body.input28
      req.body.founderPhone = req.body.input29
      req.body.socialMedia = req.body.input30
    
      sum = score1+score2+score3+score4+score5+score6+score7+score8+score9    
      req.body.profileCompletionScore = sum;
      req.body.requiredInvestment= reqIn     
      //console.log(sum) 
    //  console.log('required investment',req.body.requiredInvestment)
      const newform = new Form(req.body)
      await newform.save()
    res.redirect('/prefb')

    /*const showdetail = await Form.find()            
    let showResult1 = JSON.stringify(newform)
    let showResult = JSON.parse(showResult1)
    //res.send(showResult.projectname)
    res.render('subprofile',{
      user_data1:   showResult.projectname,
      user_data2:   showResult.foundername,
      user_data3:   showResult.founderdescription,
      user_data4:   showResult.projectmotive,
      user_data5:   showResult.useracheivement,
     
      user_data6:   showResult.teamdescription,
      user_data7:   showResult.teamconnection,
      user_data8:   showResult.mentorinfo,
      
      user_data9:   showResult.projectdescription,
      user_data10:  showResult.projectstage,
      user_data11:  showResult.horizontalsector,
      user_data12:  showResult.verticalsector,
      user_data13:  showResult.projectacheivement,
      user_data14:  showResult.projectvision,
      user_data15:  showResult.projectplatform,
      user_data16:  showResult.prefferedbussiness,
     
      user_data17:  showResult.valuation,
      user_data18:  showResult.projectvaluation,
      user_data19:  showResult.projectpercentage,
      user_data20:  showResult.requiredinvestment,
      user_data21:  showResult.fundsutilization,
      
      user_data22:  showResult.founderemail,
      user_data23:  showResult.founderphone,
      user_data24:  showResult.socialmedialinks
    }) */ 
  //console.log('this is your empty', +sum)
  //console.log(newform)
  }