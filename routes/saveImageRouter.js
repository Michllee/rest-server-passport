var express = require('express');
var saveImgRouter = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,'../uploads');
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() +'.'+ file.originalname.split('.')[1]);
    }
})

var upload = multer({storage:storage});
saveImgRouter.all(function (req,res,next) {
    console.log('ok')
    })
    .post('/',upload.any(),function(req,res,next){

        res.end('ok')
    });

module.exports = saveImgRouter;


