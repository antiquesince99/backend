const Model = require('../models/usermodel');

const router = require('express').Router()


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

router.get('/getbyusername/:username', (req, resp) => {
    usernm = req.params.username;
    Model.findOne({username : usernm})
    .then(data => {
        resp.status(200).json(data)
    })
    .catch(err => {
        resp.status(500).json(err);
    })
})


router.get('/getall', (req, resp) => {
    Model.find({})
    .then(data => {
        resp.status(200).json(data)
    })
    .catch(err => {
        resp.status(500).json(err);
    })
 
})


const multer= require('multer');
 
const storage=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,'./uploads/users');
    },
    filename: (req,file,cb)=>{
        cb(null, file.originalname);
    }
});


const upload=multer({storage:storage})
router.post('/addimg',upload.single('image'),(req,res)=>{
    console.log(req.body);
    res.json({message:"File upload success"})
})
module.exports = router;