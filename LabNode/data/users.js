var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    name : {type : String, default: ''},
    password : {type : String, default: ''},
    profession : {type : String, default: ''},
    id : {type : String, default: ''}
});