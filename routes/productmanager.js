const Model = require('../models/product');

const router = require('express').Router()
const multer= require('multer');
 
const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./uploads/products');
    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname);
    }
})
const upload=multer({storage:storage})
router.post('/addimg',upload.single('image'),(req,res)=>{
    console.log(req.body);
    res.json({message:"File upload success"})
})
 


router.post('/add', (req, res) => {
    data = req.body;

    let model = new Model(data);

    model.save()
    .then(data => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

router.get('/getall',(req,res)=>{

    
    Model.find({})
    .then(data=>{
        res.status(200).json(data);
    })
    .catch(err => {
        res.status(500).json(err);
    })
})

module.exports = router;