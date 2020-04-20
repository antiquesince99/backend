const mailjs = require("emailjs/email");
const express = require("express");
const router = express.Router();
router.post('/sendmail',(req,res)=>{
    data=req.body;
    username="";
    pass="";
    sendMail(data,username,pass,(err)=>{
        if(err) res.json(err)
        else res.json({message:"OTP Successfully Sent"})
    });
})
 
sendMail = (data,username,password, callback)=>{
    var server = mailjs.server.connect({
        user : "ry663164@gmail.com",
        password : "uvcdlfqiolokwqsk",
        host : "smtp.gmail.com",
        ssl : true
    });
 
    //send the message and get a callback with an error or details of the that was sent
    server.send({
        text: data.message,
        from: data.from,
        to: data.to,
        cc: "ry663164@gmail.com",
        subject : data.subject
    }, callback);
}
 
module.exports = router