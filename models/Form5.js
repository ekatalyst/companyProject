const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const form5Schema = new mongoose.Schema({

    ventureCapitalistName:{
        type: String,
        //ref: 'User',
        trim: true
    },    
    ventureType:{
        type: String,
        //ref: 'User',
        trim: true
    },
    leadingMembers:{
        type: Number,
        //ref: 'User',
        trim: true
    },
    founderName: {
        type: String,
        //ref: 'User',
        trim: true
    },
    describeVenture:{
        type: String,
        //ref: 'User',
        trim: true
    },
    ventureMotivation:{
        type:String,
        //ref: 'User',
        trim: true
    },
    associatedCompanies:{
        type:String,
        //ref: 'User',
        trim: true
    },
    coreTeamMembers:{
        type:Number,
        //ref: 'User',
        trim: true
    },
    teamAmbition:{
        type:String,
        //ref: 'User',
        trim: true
    },
    coreTeamConnection:{
        type:String,
        //ref: 'User',
        trim: true
    },
    nameCoreTeam:{
        type:String,
        //ref: 'User',
        trim: true
    },
    investedCompanies:{
        type:String,
        //ref: 'User',
        trim: true
    },
    companiesPortfolio:{
        type:String,
        //ref: 'User',
        trim: true
    },
    numberExists:{
        type:Number,
        //ref: 'User',
        trim: true
    },
    targetedVerticalDomainCompany:{
        type:String,
        //ref: 'User',
        trim:true
    },
    typeVerticalDomainCompany:{
        type:String,
        //ref: 'User',
        trim:true
    },
    typeHorizontalDomainCompany:{
        type:String,
        //ref: 'User',
        trim:true
    },
    expectedMonthelyRevenue:{
        type:Number,
        //ref: 'User',
        trim:true
    },
    expectedPaybackPeriod:{
        type:Number,
        //ref: 'User',
        trim:true
    },
    expectedReturnInvestment:{
        type:Number,
        //ref: 'User',
        trim:true
    },
    proposedInvestment:{
        type:Number,
        //ref: 'User',
        trim:true
    },
    targetedEquityRange:{
        type:Number,
        //ref: 'User',
        trim:true
    },
    targetedRangeValuation:{
        type:Number,
        //ref: 'User',
        trim:true
    },
    proposedTypeVentureCapital:{
        type:String,
        //ref: 'User',
        trim:true
    },
    proposedMethodVentureCapital:{
        type:String,
        //ref: 'User',
        trim:true
    },
    activeEmailId:{
        type:String,
        //ref: 'User',
        unique: true,
        trim:true
    },
    activePhone:{
        type:Number,
        //ref: 'User',
        unique: true,
        trim:true
    },
    socialMediaLinks:{
        type:String,
        //ref: 'User',
        trim:true
    },
    profileCompletionScore:{
        type:Number
    }
})

module.exports = mongoose.model('Form5', form5Schema)