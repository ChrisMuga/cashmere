mongoose = require('mongoose');
const Schema = mongoose.Schema;

//define model schema with field parameters
const user_schema = new Schema({
    id              :       {
                                type    : String,
                                unique  : true
                            },
    first_name      :       String,
    last_name       :       String,
    phone_number    :       String,
    email_address   :       {
                                type    : String,
                                unique  : true
                            },
    password        :       String
});

var User = mongoose.model('User', user_schema);

module.exports = User;