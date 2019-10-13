const mongoose = require('mongoose')
const Form3 = mongoose.model('Form3')
//const moment = require('moment-timezone') 


exports.fillForm = (req, res) => {
    // req.flash('success','welcome in register page')
     res.render('form3')
   } 

exports.register = async(req, res) => {

  let sum=0
  let score1,score2,score3,score4,score5,score6,updatedData;


    req.body.brandName = req.body.input1 
    req.body.founderNumber =  req.body.input2 
    req.body.founderName = req.body.input3 
    req.body.coreTeamMembers = req.body.input4 
    //input5 founder image
    req.body.anyStories = req.body.input6 
    req.body.companyVision = req.body.input7 
    req.body.projectAge = req.body.input8 
    req.body.brandStage = req.body.input9 
    req.body.verticalSector = req.body.input10  //
    if(req.body.verticalSector == 'Not Available')
      {
        score1 = 0
      }
      else{
        score1 = 2
      }

    req.body.horizontalSector = req.body.input11  //
    if(req.body.horizontalSector == 'Not Available')
      {
        score2 = 0
      }
      else{
        score2 = 2
      }

    //input12 project brand image
    req.body.projectProblem = req.body.input13 
    req.body.brandDescription = req.body.input14 
    req.body.projectValuation = req.body.input15 
    req.body.marketSize = req.body.input16 
    req.body.mrrGrowth = req.body.input17 
    req.body.mrrChurn = req.body.input18 
    req.body.recentDataInvestement = req.body.input19
    req.body.requiredInvestement = req.body.input20 //
    if(req.body.requiredInvestement == 0)
      {
        score3 = 0
        updatedData = 0
      }
      else{
        score3 = 2
        updatedData = req.body.requiredInvestment
      }

    req.body.rangeEquityPercentage = req.body.input21  //0
    if(req.body.rangeEquityPercentage == 0)
    {
      score4 = 0
      updatedData = 0
    }
    else{
      score4 = 2
      updatedData = req.body.rangeEquityPercentage
    }
    req.body.ventureCapitalType = req.body.input22 //
    if(req.body.ventureCapitalType == 'Not Available')
      {
        score5 = 0
      }
      else{
        score5 = 2
      }

    req.body.prefferedMethodCapital = req.body.input23 //
    if(req.body.prefferedMethodCapital == 'Not Available')
      {
        score6 = 0
      }
      else{
        score6 = 2
      }

    req.body.activeEmailId = req.body.input24 
    req.body.activePhone = req.body.input25 
    req.body.socialLinks = req.body.input26 

    sum = score1+score2+score3+score4+score5+score6
    req.body.profileCompletionScore = sum
    req.body.requiredInvestement = updatedData
    req.body.rangeEquityPercentage = updatedData

    
    const newform = new Form3(req.body)
    await newform.save()
    res.redirect('/prefvc')
    //res.send('affirmative results')
    //console.log(newform)
  }