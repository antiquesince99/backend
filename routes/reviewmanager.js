const express=require("express")
const router=express.Router();
const Model=require('../models/review')
 
router.post('/addreview',(req,res)=>{
    data=req.body;
    model=new Model(data)
    model.save()
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
})
 
router.get('/getbyhost/:hostid',(req,res)=>
{
    let hostid = req.params.hostid;
    Model.find({host: hostid})
    .populate('user')
    .then((data)=>{
        console.log(data);
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
})
 
router.get('/getallreviews/:hostid',(req,res)=>
{
    let hostid = req.params.hostid;
    console.log(hostid);
    Model.find({host: hostid})
    .then((data)=>{
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
})
 
module.exports=router;