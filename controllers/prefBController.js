const mongoose = require('mongoose')
//const Prefb = mongoose.model('Prefb')
const Form = mongoose.model('Form')
//const moment = require('moment-timezone');


exports.prefpage = (req, res) => {
    // req.flash('success','welcome in register page')
     res.render('prefb')
   };

exports.userpref = async(req, res) => {
    
     // req.body.rangeinvestment =  req.body.user1;
      //let marks=0
      //if(req.body.rangeinvestment == ''){
        //marks=4
      //}
      //console.log(marks)

      //console.log(req.body);
      

        let pref1,pref2,pref3,pref4,pref5,pref6,pref7,pref8,pref9 
        pref1 = req.body.input1
        pref2 = req.body.input2
        pref3 = req.body.input3
        pref4 = req.body.input4
        pref5 = req.body.input5
        pref6 = req.body.input6
        pref7 = req.body.input7
        pref8 = req.body.input8
        pref9 = req.body.input9


      //const newPrefb = new Prefb(req.body)
      //await newPrefb.save();
      const showuserData = await Form.find(
        {$or:[
        {requiredInvestment:pref1},
        {verticalSector:pref2},
        {horizontalSector:pref3},
        {horizontalSector:pref3},
        {userLocation:pref4},
        {projectStage:pref5},
        {investmentType:pref6},
        {projectValuation:pref7},
        {projectPlatform:pref8},
        {prefferedBussiness:pref9},
      
        
        ]})
      console.log(showuserData)
       

        //const clearData = JSON.parse(showuserData)
        //console.log(JSON.stringify(showuserData.split(' ', 8)))
        //res.send(JSON.stringify(showuserData[0].userLocation))

        let users = []

        JSON.stringify(showuserData)
        for(let i=0;i<showuserData.length;i++)
        {
          
          var user = {
            id : showuserData[i]._id,
            score : showuserData[i].profileCompletionScore
          }
          
          if(showuserData[i].requiredInvestment== pref1){  
            user.score +=2
            //console.log(score)
          }
          else if(showuserData[i].verticalSector==pref2){
            
            user.score+=2
           // console.log(score)
          }
          else if(showuserData[i].horizontalSector == pref3){ 
            user.score+=2
            //console.log(score)
          }
          else if(showuserData[i].userLocation == pref4){    
            user.score+=2
            //console.log(score)
          }
          else if(showuserData[i].projectStage==pref5){  
            user.score+=2
            //console.log(score)
          }
          else if(showuserData[i].investmentType==pref6){ 
            user.score+=2
            //console.log(score)
          }
          else if(showuserData[i].projectValuation==pref7){ 
            user.score+=2
            //console.log(score)
          }
          else if(showuserData[i].projectPlatform==pref8){ 
            user.score+=2
            //console.log(score)
          }
          else if(showuserData[i].prefferedBussiness==pref9){ 
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

        
        
      
        console.log('prefernce',pref1)
        console.log('prefernce',pref2)
        console.log('prefernce',pref3)
        console.log('prefernce',pref4)
        console.log('prefernce',pref5)
        console.log('prefernce',pref6)
        console.log('prefernce',pref7)
        console.log('prefernce',pref8)
        console.log('prefernce',pref9)

     }
  
exports.userFilter = async(res, req) => {

}