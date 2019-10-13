const mongoose = require('mongoose')
const Form4 = mongoose.model('Form4')
const multer = require('multer')
const uuid = require('uuid')
const jimp = require('jimp')
//const moment = require('moment-timezone');
const cloudinary = require('cloudinary')
const path = require('path')
//const arrayImage = ['userImageA','userImageB','userImageC']
//const moment = require('moment-timezone') 
const multerOptions = {
  storage: multer.memoryStorage(),
  fileFilter(req, file, next) {
    const isPhoto = file.mimetype.startsWith('image/')
    if(isPhoto){
      next(null, true)
    }
    else{
      next({ message: 'not a supported file'}, false)
    }
  }
}

//const arrayImage = ['userImageA','userImageB','userImageC']

exports.fillForm = (req, res) => {
 
  // req.flash('success','welcome in register page')
     res.render('form4')
   } 


   
exports.upload1 = multer(multerOptions).fields([{name:'userImageA'},{name:'userImageB'},{name:'userImageC'}])
//exports.upload2 = multer(multerOptions).single('userImageB')
//exports.upload3 = multer(multerOptions).single('userImageC')


exports.register = async(req, res, next) => {

    //let image = multer(multerOptions).single('userImageA')

  if(!req.file){
    next()
    return
  }
  
   const extension1 = req.file.mimetype.split('/')[1]
   req.body.userImageA = `${uuid.v4()}.${extension1}`
   const photo1 = await jimp.read(req.file.buffer)
                // await photo.resize(500, jimp.AUTO)
                 await photo1.write(`./public/uploads/${req.body.userImageA}`)
                 
   
    req.body.userImageB = `${uuid.v4()}.${extension1}`
    const photo2 = await jimp.read(req.file.buffer)
                 // await photo.resize(500, jimp.AUTO)
                  await photo2.write(`./public/uploads/${req.body.userImageB}`)             
   
    
    req.body.userImageC = `${uuid.v4()}.${extension1}`
    const photo3 = await jimp.read(req.file.buffer)
                  // await photo.resize(500, jimp.AUTO)
                   await photo3.write(`./public/uploads/${req.body.userImageC}`)

  console.log(`./public/uploads/${req.body.userImageA}`)
  console.log(`./public/uploads/${req.body.userImageB}`)
  console.log(`./public/uploads/${req.body.userImageC}`)
  
   //console.log()
   cloudinary.config({
     cloud_name: 'katalyst',
     api_key: process.env.API_KEY,
     api_secret: process.env.API_SECRET
     }); 
 
   cloudinary.v2.uploader.upload(`./public/uploads/${req.body.userImageA}`,{ transformation: { width:100, height:100}}, function(error, result) { 
   console.log('please show result\t' +JSON.stringify(result))
   console.log(result.secure_url)
 })
  
 cloudinary.v2.uploader.upload(`./public/uploads/${req.body.userImageB}`,{ transformation: { width:100, height:100}}, function(error, result) { 
  console.log('please show result\t' +JSON.stringify(result))
  console.log(result.secure_url)
})

cloudinary.v2.uploader.upload(`./public/uploads/${req.body.userImageC}`,{ transformation: { width:100, height:100}}, function(error, result) { 
  console.log('please show result\t' +JSON.stringify(result))
  console.log(result.secure_url)
})

  let sum=0
  let score1,score2,score3,score4,score5,score6,updatedData

    req.body.campaignFounder = req.body.input1 
    req.body.totalCampaignMembers =  req.body.input2 
    //input3 founderImage
    req.body.descriptionCampaign = req.body.input4 
    req.body.campaignStory = req.body.input5 
    req.body.teamEfforts = req.body.input6 
    req.body.verticalDomain = req.body.input7 //  -3
    if(req.body.verticalDomain == 'Not Available')
      {
        score1 = 0
      }
      else{
        score1 = 2
      }

    req.body.horizontalDomain = req.body.input8 //  -4
    if(req.body.horizontalDomain == 'Not Available')
      {
        score2 = 0
      }
      else{
        score2 = 2
      }

    req.body.campaignType = req.body.input9 //  -2
    if(req.body.campaignType == 'Not Available')
      {
        score3 = 0
      }
      else{
        score3 = 2
      }

    req.body.locationCampaign = req.body.input10 //  -5
    if(req.body.locationCampaign == 'Not Available')
      {
        score4 = 0
      }
      else{
        score4 = 2
      }

    req.body.describeCampaign = req.body.input11 
    //input12 photoCampaign
    //input13 vedioCampaign
    req.body.crowdFundingType = req.body.input14 //   -1 
    if(req.body.crowdFundingType == 'Not Available')
      {
        score5 = 0
      }
      else{
        score5 = 2
      }

    req.body.requiredDonation = req.body.input15 //0  -6
    if(req.body.requiredDonation == 0)
      {
        score6 = 0
        updatedData = 0
      }
      else{
        score6 = 2
        updatedData =req.body.requiredDonation
      }

    req.body.timeCampaign = req.body.input16 
    req.body.goalDonation = req.body.input17 
    req.body.describeReward = req.body.input18 
    req.body.detailReward = req.body.input19 
    //input20 photoVedioReward
    req.body.activeEmailId = req.body.input21 
    req.body.activePhone = req.body.input22 
    req.body.socialLinks = req.body.input23 
    req.body.founderAddress = req.body.input24 
   
    sum = score1+score2+score3+score4+score5+score6
    req.body.profileCompletionScore = sum
    req.body.requiredDonation = updatedData
    req.body.userImage = req.body.userImage
   
      //next()
    

    const newform = new Form4(req.body)
    await newform.save()
    res.redirect('/prefcr')
    //console.log(newform)
  }
