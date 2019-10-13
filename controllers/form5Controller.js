const mongoose = require('mongoose')
const Form5 = mongoose.model('Form5')
//const moment = require('moment-timezone') 


exports.fillForm = (req, res) => {
    // req.flash('success','welcome in register page')
     res.render('form5')
   } 

exports.register = async(req, res) => {

  let sum=0
  let score1,score2,score3,score4,score5,score6,score7,updatedData

    req.body.ventureCapitalistName = req.body.input1 
    req.body.ventureType =  req.body.input2 
    req.body.leadingMembers = req.body.input3 
    req.body.founderName = req.body.input4 
    //input5 founder's image
    req.body.describeVenture = req.body.input6 
    req.body.ventureMotivation = req.body.input7
    req.body.associatedCompanies = req.body.input8 
    req.body.coreTeamMembers = req.body.input9 
    req.body.teamAmbition = req.body.input10 
    req.body.coreTeamConnection = req.body.input11 
    req.body.nameCoreTeam = req.body.input12
     
    //input13 team's image
    req.body.investedCompanies = req.body.input14
    req.body.companiesPortfolio = req.body.input15
    req.body.numberExists = req.body.input16 
    req.body.targetedVerticalDomainCompany = req.body.input17 
    req.body.typeVerticalDomainCompany = req.body.input18 //
    if(req.body.typeVerticalDomainCompany == 'Not Available')
      {
        score1 = 0
      }
      else{
        score1 = 2
      }

    req.body.typeHorizontalDomainCompany = req.body.input19  //
    if(req.body.typeHorizontalDomainCompany == 'Not Available')
      {
        score2 = 0
      }
      else{
        score2 = 2
      }

    req.body.expectedMonthelyRevenue = req.body.input20 //0
    if(req.body.expectedMonthelyRevenue == 0)
    {
      score3 = 0
      updatedData = 0
    }
    else{
      score3 = 2
      updatedData = req.body.expectedMonthelyRevenue
    }
    
    req.body.expectedPaybackPeriod = req.body.input21
    req.body.expectedReturnInvestment = req.body.input22
    req.body.proposedInvestment = req.body.input23 //0
    if(req.body.proposedInvestment == 0)
    {
      score4 = 0
      updatedData = 0
    }
    else{
      score4 = 2
      updatedData = req.body.proposedInvestment
    }
    req.body.targetedEquityRange = req.body.input24 //0
    if(req.body.targetedEquityRange == 0)
    {
      score5 = 0
      updatedData = 0
    }
    else{
      score5 = 2
      updatedData = req.body.targetedEquityRange
    }
    req.body.targetedRangeValuation = req.body.input25 
    req.body.proposedTypeVentureCapital = req.body.input26 //
    if(req.body.proposedTypeVentureCapital == 'Not Available')
    {
      score6 = 0
    }
    else{
      score6 = 2
    }
    req.body.proposedMethodVentureCapital = req.body.input27 //
    if(req.body.proposedMethodVentureCapital == 'Not Available')
    {
      score7 = 0
    }
    else{
      score7 = 2
    }
    req.body.activeEmailId = req.body.input28 
    req.body.activePhone = req.body.input29
    req.body.socialMediaLinks = req.body.input30 
      
    
    sum = score1+score2+score3+score4+score5+score6+score7
    req.body.profileCompletionScore = sum
    req.body.expectedMonthelyRevenue = updatedData
    req.body.proposedInvestment = updatedData
    req.body.targetedEquityRange = updatedData

    const newform = new Form5(req.body)
    await newform.save()
    res.redirect('/prefvc2')
    //console.log(newform)
  }