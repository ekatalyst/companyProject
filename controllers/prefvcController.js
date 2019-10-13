const mongoose = require('mongoose')
const Form3 = mongoose.model('Form3')
//const moment = require('moment-timezone');


exports.prefpage = (req, res) => {
    // req.flash('success','welcome in register page')
     res.render('prefvc')
   };

exports.userpref = async(req, res) => {
    
  let input1,input2,input3,input4,input5,input6
  input1 = req.body.pref1
  input2 = req.body.pref2
  input3 = req.body.pref3
  input4 = req.body.pref4
  input5 = req.body.pref5
  input6 = req.body.pref6
   
  const showuserData = await Form3.find(
   {$or:[
   {requiredInvestement:input1},
   {verticalSector:input2},
   {horizontalSector:input3},
   {ventureCapitalType:input4},
   {prefferedMethodCapital:input5},
   {rangeEquityPercentage:input6}
 
   
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
   
   if(showuserData[i].requiredInvestement == input1){  
     user.score +=2
     //console.log(score)
   }
   else if(showuserData[i].verticalSector == input2){
     
     user.score+=2
    // console.log(score)
   }
   else if(showuserData[i].horizontalSector == input3){ 
     user.score+=2
     //console.log(score)
   }
   else if(showuserData[i].ventureCapitalType == input4){    
     user.score+=2
     //console.log(score)
   }
   else if(showuserData[i].prefferedMethodCapital == input5){  
     user.score+=2
     //console.log(score)
   }
   else if(showuserData[i].rangeEquityPercentage == input6){ 
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
      //const newPref = new Prefvc(req.body)
      //await newPref.save();
            
      
      
      
      
      
      
      
      
      
      
      
      res.render('user_page');
      //console.log(JSON.stringify(newContact))
      //console.log(newPref)
  }
  