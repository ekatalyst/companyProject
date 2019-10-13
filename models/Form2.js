const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const form2Schema = new mongoose.Schema({

    
    investorName:{
        type: String,
        //required: 'Please enter your Project Name',
        ref: 'User',
        trim: true

    },
    whomRepresenting:{
        type: String,
        //required: 'Please enter your Founder Name',
        ref: 'User',
        trim: true

    },
    investorImage:{
        type: String,
    },
    investorDescription:{
        type: String,
        //required: 'Please enter your Founder Description',
        ref: 'User',
        trim: true

    },
    organisationPart:{
        type: String,
        //required: 'Please enter your Project Motive',
        ref: 'User',
        trim: true

    },
    investorSkills:{
        type: String,
        //required: 'Please enter your Acheivement',
        ref: 'User',
        trim: true
    },
    occupationInvestor:{
        type: String,
        //required: 'Please enter your Team Description',
        ref: 'User',
        trim: true
    },
    experienceInvestor:{
        type: String,
        //required: 'Please enter your Team Description',
        ref: 'User',
        trim: true
    },
    pastInvestment:{
        type: Number,
        //required: 'Please enter your Mentor Information',
        ref: 'User',
        trim: true
    },
    describePastInvestment:{
        type: String,
        //required: 'Please enter your Project Information',
        ref: 'User',
        trim: true
    },
    
    successPercentage:{
        type: Number,
        //required: 'Please enter your Project Stage',
        ref: 'User',
        //min: '1',
        //max: '100',
        trim: true
    }, 
    verticalSector:{
        type: String,
        //required: 'Please enter your Project Vertical Sector',
        ref: 'User',
        trim: true
    },
    horizontalSector:{
        type: String,
        //required: 'Please enter your Project Horizontal Sector',
        ref: 'User',
        trim: true
    },
    investorLocation:{
      type:String,
      trim: true  
    },
    projectAcheivement:{
        type: String,
        //required: 'Please enter your Project Acheivement',
        ref: 'User',
        trim: true
    },
    projectStage:{
        type:String,
        //required: 'Please enter your Project Vision',
        ref: 'User',
        trim:true
    },
    prefferedBussiness:{
        type: String,
        //required: 'Please enter your Project Platform',
        ref: 'User',
        trim: true
    },
    investorExpectation:{
        type: String,
        //required: 'Please enter your Preffered Business',
        ref: 'User',
        trim: true
    },
    investType:{
        type: String,
        //required: 'Please enter your Type of Valuation',
        ref: 'User',
        trim: true
    },
    investorType:{
        type: String,
        //required: 'Please enter your Type of Valuation',
        //        ref: 'User',
        trim: true

    },
    rangeInvestment:{
        type: Number,
        //required: 'Please enter your Project Valuation',
        ref: 'User',
        //min: '1000',
        //max: '100000',
        trim: true
    },
    rangeEquity:{
        type: Number,
        //required: 'Please enter your Project Percentage',
        ref: 'User',
        //min:'1000',
        //max: '100000',
        trim: true
    },
    rangeValuation:{
        type: Number,
        //required: 'Please enter your Project Required Investment',
        ref: 'User',
        trim: true
    },
    investmentProcedure:{
        type: String,
        //required: 'Please enter your Funds Utilization',
        ref: 'User',
        trim: true
    },
    activeEmailId:{
        type: String,
        lowercase: true,
        ref: 'User',
        unique: true,
        //validate:[validator.isEmail,'Invalid Email Address'],
        trim: true    
    },
    activePhone:{
        type: Number,
       // required: 'Please enter your Founder Phone',
        ref: 'User',
        trim: true
    },
    socialLinks:{
        type: String,
        //required: 'Please enter your Social media links',
        ref: 'User',
        trim: true
    },
    profileCompletionScore:{
        type:Number
    }
})

module.exports = mongoose.model('Form2', form2Schema)