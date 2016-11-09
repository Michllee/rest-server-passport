var express = require('express');

var saveImgRouter = express.Router();

saveImgRouter.all(function (req,res,next) {
    console.log('ok')
    })
    .post('/',function(req,res,next){

        if ( !req.body.img ) {
            res.json({err:"Image err"});
        }else {
            res.status(200).end(req.body.img)
        }

    });

module.exports = saveImgRouter;