const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const ejs = require("ejs")
const OAuth2 = google.auth.OAuth2;
 


exports. usersendmail = async function sendEmail(options) {
    console.log('its going on..')
    const oauth2Client = new OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);
oauth2Client.setCredentials({
    refresh_token: "1/NSsdro1fW4jM-yWxYcEbpk414PPHq0uxZPWrwuU-AgE"
});
const tokens = await oauth2Client.refreshAccessToken()
const accessToken = tokens.credentials.access_token
const smtpTransport = nodemailer.createTransport({
     
    service: "gmail",
         
    auth: {
              
    type: "OAuth2",
              
    user: "ekatalyst.contact@gmail.com", 
              
    clientId: process.env.CLIENT_ID,
              
    clientSecret: process.env.CLIENT_SECRET,
              
    refreshToken: "1/NSsdro1fW4jM-yWxYcEbpk414PPHq0uxZPWrwuU-AgE",
              accessToken: accessToken
         }
    });

        //const generateHTML = (filename, options ={}) =>{
          //  const html = ejs.renderFile(`${__dirname}/../views/email/${}`)
        //}

        const mailOptions = {
     
        from: "support-info@ekatalyst.com",
             
        to: options.to,
             
        subject: "Hey it's email confirmation",
             
        generateTextFromHTML: true,
             
        html: options.html
        };

        smtpTransport.sendMail(mailOptions, (error, response) => {
            error ? console
       .log(error) : console.log(response);
            smtpTransport
       .close();
       });} // That last brace is to close off our async function


       //sendEmail();

