var express = require('express');

var saveImgRouter = express.Router();

saveImgRouter.all(function (req,res,next) {

    })
    .post('/',function(req,res,next){
        console.log(req);

    });

module.exports = saveImgRouter;