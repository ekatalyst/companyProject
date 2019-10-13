const mongoose = require('mongoose')
const Form5 = mongoose.model('Form5')
//const moment = require('moment-timezone');


exports.fillForm = (req, res) => {
    // req.flash('success','welcome in register page')
     res.render('prefvc2')
   };

exports.register = async(req, res) => {

  let input1,input2,input3,input4,input5,input6,input7
  input1 = req.body.pref1
  input2 = req.body.pref2
  input3 = req.body.pref3
  input4 = req.body.pref4
  input5 = req.body.pref5
  input6 = req.body.pref6
  input7 = req.body.pref7
   
  const showuserData = await Form5.find(
   {$or:[
   {proposedInvestment:input1},
   {typeVerticalDomainCompany:input2},
   {typeHorizontalDomainCompany:input3},
   {proposedTypeVentureCapital:input4},
   {proposedMethodVentureCapital:input5},
   {expectedMonthelyRevenue:input6},
   {targetedEquityRange:input7}
 
   
   ]})
 console.log(showuserData)
 

 let users = []

 JSON.stringify(showuserData)
 for(let i=0;i<showuserData.length;i++)
 {
   
   var user = {
     id : showuserData[i]._id,
     score : showuserData[i].profileCompletionScore
   }
   
   if(showuserData[i].proposedInvestment== input1){  
     user.score +=2
     //console.log(score)
   }
   else if(showuserData[i].typeVerticalDomainCompany==input2){
     
     user.score+=2
    // console.log(score)
   }
   else if(showuserData[i].typeHorizontalDomainCompany == input3){ 
     user.score+=2
     //console.log(score)
   }
   else if(showuserData[i].proposedTypeVentureCapital == input4){    
     user.score+=2
     //console.log(score)
   }
   else if(showuserData[i].proposedMethodVentureCapital==input5){  
     user.score+=2
     //console.log(score)
   }
   else if(showuserData[i].expectedMonthelyRevenue==input6){ 
     user.score+=2
     //console.log(score)
   }
   else if(showuserData[i].targetedEquityRange==input7){ 
     user.score+=2
     //console.log(score)
   }
   else{
     user.score = 0
   }
    
   users.push(user)
   
 }
 users.sort((a, b) => (a.score < b.score) ? 1 : -1)

 
      console.log('User preference' ,users)
      console.log('prefernce',input1)
      console.log('prefernce',input2)
      console.log('prefernce',input3)
      console.log('prefernce',input4)
      console.log('prefernce',input5)
      console.log('prefernce',input6)
      console.log('prefernce',input7)  
            
    
    
    
    
    
    res.render('user_page4')
    //console.log(newform)
  }