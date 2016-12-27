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
    .post(function (req, res, next) {
        Resume.create(req.body, function (err, resume) {
            if (err) {
                next(err);
            }
            console.log(resume);
            res.status(200).json({
                "success": true,
                "data": resume
            });
        })
    })
resumeRouter.route('/:nameId')
    .get(function (req, res, next) {
        var name = req.params.nameId;
        var data = {
            tit: '简历',
            content: {}
        }

        Resume.find({ 'name': name }, function (err, resume) {
            data.content = resume[0];
            res.render('', data);
            // res.status(200).json({
            //     success:true,
            //     data:resume[0]
            // })
        })


    })
    .delete(function (req, res, next) {
        var name = req.params.nameId;
        Resume.remove({ name: name }, function (err, res) {
            if (err) {
                res.ststus(200).json({
                    "success": false,
                    "msg": "delete err"
                })
            }
            res.ststus(200).json({
                "success": true,
                "msg": "delete " + name
            })
        });
    })

resumeRouter.route('/:nameId/descrips')
    .get(function (req, res, next) {
        Resume.find({ 'name': req.params.nameId }, function (err, resume) {
            if (err) {
                res.status(300).json({
                    'success': fasle,
                    'msg': err
                })
            }
            res.status(200).json({
                'success': true,
                'descrips': resume[0].descrips
            })
        })
    })

module.exports = resumeRouter;