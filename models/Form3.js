const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const form3Schema = new mongoose.Schema({

    
    brandName:{
        type: String,
        //required: 'Please enter your Project Name',
        //ref: 'User',
        trim: true

    },
    founderNumber:{
        type: Number,
        //required: 'Please enter your Founder Name',
        //ref: 'User',
        trim: true

    },
    
    founderName:{
        type: String,
        //required: 'Please enter your Founder Description',
        //ref: 'User',
        trim: true

    },
    coreTeamMembers:{
        type: Number,
        //required: 'Please enter your Project Motive',
        //ref: 'User',
        trim: true

    },
    anyStories:{
        type: String,
        //required: 'Please enter your Acheivement',
        //ref: 'User',
        trim: true
    },
    companyVision:{
        type: String,
        //required: 'Please enter your Team Description',
        //ref: 'User',
        trim: true
    },
    projectAge:{
        type: Number,
        //required: 'Please enter your Team Description',
        //ref: 'User',
        trim: true
    },
    brandStage:{
        type: String,
        //required: 'Please enter your Team Description',
        //ref: 'User',
        trim: true
    },
    verticalSector:{
        type: String,
        //required: 'Please enter your Project Vertical Sector',
        //ref: 'User',
        trim: true

    },
    horizontalSector:{
        type: String,
        //required: 'Please enter your Project Vertical Sector',
        //ref: 'User',
        trim: true

    },
   projectProblem:{
        type: String,
        //required: 'Please enter your Project Information',
        //ref: 'User',
        trim: true
    },
    
    brandDescription:{
        type: String,
        //required: 'Please enter your Project Stage',
        //ref: 'User',
        trim: true
    }, 
    projectValuation:{
        type: Number,
        //required: 'Please enter your Project Vertical Sector',
        //ref: 'User',
        trim: true
    },
    marketSize:{
        type: Number,
        //required: 'Please enter your Project Horizontal Sector',
       // ref: 'User',
        trim: true
    },

    mrrGrowth:{
        type: Number,
        //required: 'Please enter your Project Acheivement',
        //ref: 'User',
        trim: true
    },
    mrrChurn:{
        type:Number,
        //required: 'Please enter your Project Vision',
        //ref: 'User',
        trim:true
    },
    recentDataInvestement:{
        type:Number,
        //required: 'Please enter your Project Vision',
        //ref: 'User',
        trim:true    
    },
    requiredInvestement:{
        type:Number,
        //required: 'Please enter your Project Vision',
        //ref: 'User',
        trim:true    
    },
    rangeEquityPercentage:{
        type:Number,
        //required: 'Please enter your Project Vision',
        //ref: 'User',
        trim:true
    },
    ventureCapitalType:{
        type: String,
        //required: 'Please enter your Project Information',
        //ref: 'User',
        trim: true
    },
    prefferedMethodCapital:{
        type: String,
        //required: 'Please enter your Project Information',
        //ref: 'User',
        trim: true
    },
    activeEmailId:{
        type: String,
        lowercase: true,
        //ref: 'User',
        unique: true,
        //validate:[validator.isEmail,'Invalid Email Address'],
        trim: true    
    },
    activePhone:{
        type: Number,
       // required: 'Please enter your Founder Phone',
        //ref: 'User',
        trim: true
    },
    socialLinks:{
        type: String,
        //required: 'Please enter your Social media links',
        //ref: 'User',
        trim: true
    },
    profileCompletionScore:{
        type:Number
    }
})

module.exports = mongoose.model('Form3', form3Schema)