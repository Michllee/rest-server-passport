/**
 * Created by liyang9 on 2016/10/17.
 */
var moongose = require('mongoose');
var Schema = moongose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    username: String,
    password: String,
    admin: {
        type: Boolean,
        default: false
    }
});

User.plugin(passportLocalMongoose);

module.exports = moongose.model('User', User);