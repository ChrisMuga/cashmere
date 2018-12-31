mongoose = require('mongoose');
const Schema = mongoose.Schema;


const user_schema = new Schema({
    first_name:     String,
    last_name:      String,
    phone_number:   String,
    email_address:  String,
    password:       String
});

var User = mongoose.model('User', user_schema);

module.exports = User;