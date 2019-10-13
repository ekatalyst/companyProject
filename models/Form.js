const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const formSchema = new mongoose.Schema({

    
    projectName:{
        type: String,
        required: 'Please enter your Project Name',
       // ref: 'User',
        required:true,
        trim: true

    },
    founderName:{
        type: String,
        required: 'Please enter your Founder Name',
       // ref: 'User',
        required:true,
        trim: true

    },
    founderDescription:{
        type: String,
        required: 'Please enter your Founder Description',
        //ref: 'User',
        required:true,
        trim: true

    },
    projectMotive:{
        type: String,
        required: 'Please enter your Project Motive',
        //ref: 'User',
        required:true,
        trim: true

    },
    userAcheivement:{
        type: String,
        required: 'Please enter your Acheivement',
        //ref: 'User',
        required:true,
        trim: true
    },
    teamAmbition:{
        type: String,
        required: 'Please enter your Team Description',
        //ref: 'User',
        required:true,
        trim: true
    },
    teamConnection:{
        type: String,
        required: 'Please enter your Team Description',
        //ref: 'User',
        required:true,
        trim: true
    },
    mentorInfo:{
        type: String,
        required: 'Please enter your Mentor Information',
        //ref: 'User',
        required:true,
        trim: true
    },
    projectDescription:{
        type: String,
        required: 'Please enter your Project Information',
        //ref: 'User',
        required:true,
        trim: true
    },
    
    projectStage:{
        type: String,
        //ref: 'User',
        default:'not available',
        trim: true
    }, 
    horizontalSector:{
        type: String,
        //ref: 'User',
        default:'not available',
        trim: true
    },
    verticalSector:{
        type: String,
        default:'not available',
        //ref: 'User',
        trim: true
    },
    projectAcheivement:{
        type: String,
        required: 'Please enter your Project Acheivement',
        //ref: 'User',
        required:true,
        trim: true
    },
    projectVision:{
        type:String,
        required: 'Please enter your Project Vision',
        //ref: 'User',
        required:true,
        trim:true
    },
    projectPlatform:{
        type: String,
        default:'not available',
       // ref: 'User',
        trim: true
    },
    prefferedBussiness:{
        type: String,
        default:'not available',
       // ref: 'User',
        trim: true
    },
    valuationType:{
        type: String,
       // ref: 'User',
        required:true,
        trim: true
    },
    projectValuation:{
        type: String,
        default:'not available',
        //ref: 'User',
        trim: true
    },
    projectPercentage:{
        type: Number,
        //ref: 'User',
        required:true,
        min:'1',
        max: '100',
        trim: true
    },
    userLocation:{
        type: String,
        default:'not available',
        trim: true
    },
    investmentType:{
        type: String,
        default:'not available',
        trim:true
    },
    requiredInvestment:{
        type: Number,
       // ref: 'User',
        min: 0,
        max: 100000,
        default:0,
        trim: true
    },
    fundsUtilization:{
        type: String,
        required: 'Please enter your Funds Utilization',
      //  ref: 'User',
        required:true,
        trim: true
    },
    founderUserEmail:{
        type: String,
        lowercase: true,
      //  ref: 'User',
        unique: true,
        required:true,
        trim: true    
    },
    founderPhone:{
        type: Number,
        required: 'Please enter your Founder Phone',
        ref: 'User',
       // required:true,
        trim: true
    },
    socialMedia:{
        type: String,
        required: 'Please enter your Social media links',
       // ref: 'User',
        required:true,
        trim: true
    },
    profileCompletionScore:{
        type:Number,
    }
})

module.exports = mongoose.model('Form', formSchema)