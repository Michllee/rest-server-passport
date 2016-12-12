/**
 * Created by Lee on 2016/12/1.
 */
var express = require('express');
var bodyParser = require('body-parser');
var resumeRouter = express.Router();

var mongoose = require('mongoose');
var Resume = require('../models/resume');
resumeRouter.use(bodyParser.json());


resumeRouter.route('/')
    .post(function(req, res, next){
        Resume.create(req.body, function(err, resume){
            if(err) {
                next(err);
            }
            console.log(resume);
            res.json(200,{
                "success":true,
                "data":resume
            });
        })
    })
resumeRouter.route('/:nameID')
    .get( function (req, res, next) {
        var name = req.body.nameId
        var data = {
            tit: '简历',
            content: {}
        }

        Resume.find({})
        res.end('ok get')


    })
    .delete(function(req, res, next){
        Resume.findByIdAndRemove({});
        res.json(200, {
            "success":true,
            "msg":"delete all"
        })
    })



    module.exports = resumeRouter;
