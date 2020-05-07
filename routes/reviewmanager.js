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

router.get('/getbyuser/:id',(req,res)=>
{
    let id = req.params.productid;
    Model.find({user: id})
    .populate('user')
    .then((data)=>{
        console.log(data);
        res.status(200).json(data);
    })
    .catch((err)=>{
        res.status(500).send(err.message);
    })
})

router.get('/getbyproduct/:productid',(req,res)=>
{
    let productid = req.params.productid;
    Model.find({product: productid})
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