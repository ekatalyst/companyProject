const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const form4Schema = new mongoose.Schema({

    
    campaignFounder:{
        type: String,
        //required: 'Please enter your Project Name',
        //ref: 'User',
        trim: true

    },
    totalCampaignMembers:{
        type: Number,
        //required: 'Please enter your Founder Name',
        //ref: 'User',
        trim: true

    },
    
    descriptionCampaign:{
        type: String,
        //required: 'Please enter your Founder Description',
        //ref: 'User',
        trim: true

    },
    campaignStory:{
        type: String,
        //required: 'Please enter your Project Motive',
        //ref: 'User',
        trim: true

    },
    teamEfforts:{
        type: String,
        //required: 'Please enter your Acheivement',
        //ref: 'User',
        trim: true
    },
    verticalDomain:{
        type: String,
        //required: 'Please enter your Team Description',
        //ref: 'User',
        trim: true
    },
    horizontalDomain:{
        type: String,
        //required: 'Please enter your Team Description',
        //ref: 'User',
        trim: true
    },
    campaignType:{
        type: String,
        //required: 'Please enter your Team Description',
        //ref: 'User',
        trim: true
    },
    locationCampaign:{
        type: String,
        //required: 'Please enter your Project Vertical Sector',
        //ref: 'User',
        trim: true

    },
    describeCampaign:{
        type: String,
        //required: 'Please enter your Project Vertical Sector',
        //ref: 'User',
        trim: true

    },
   crowdFundingType:{
        type: String,
        //required: 'Please enter your Project Information',
        //ref: 'User',
        trim: true
    },
    
    requiredDonation:{
        type: Number,
        //required: 'Please enter your Project Stage',
        //ref: 'User',
        trim: true
    }, 
    userImage:{
        A:{
            type: String
        },
        B:{
            type: String
        },
        C:{
            type: String
        },
    },
    timeCampaign:{
        
        startDate:{
            type: String
        },
        endDate:{
            type: String
        }
    },
    goalDonation:{
        type: String,
        //required: 'Please enter your Project Horizontal Sector',
        //ref: 'User',
        trim: true
    },

    describeReward:{
        type: String,
        //required: 'Please enter your Project Acheivement',
        //ref: 'User',
        trim: true
    },
    detailReward:{
        type:String,
        //required: 'Please enter your Project Vision',
        //ref: 'User',
        trim:true
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
    founderAddress:{
        type: String,
        //required: 'Please enter your Social media links',
        //ref: 'User',
        trim: true
    },
    profileCompletionScore:{
        type:Number
    } 
})

module.exports = mongoose.model('Form4', form4Schema)