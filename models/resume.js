/**
 * Created by Lee on 2016/12/1.
 */
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var selfInfo = new Schema({
    descrip:{
        type:String,
        required: true
    },
    content:{
        type:String,
        required:true
    }
},{
    timestamp:true
});

var resumeInfo = new Schema({
    // id:{
    //     type:Number,
    //     required:true
    // },
    name:{
        type:String,
        required:true
    },
    gener:{
        type: String
    },
    descrips:[selfInfo]
},{
    timestamp:true
});


var Resume = mongoose.model('rsume',resumeInfo);
module.exports =Resume;
