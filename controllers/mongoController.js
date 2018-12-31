//mongo config
config = require('../config/config');
const mongoose = require('mongoose');

module.exports={
    //connect
    connect: ()=>{
        mongoose.connect(config.mongo_url,{useNewUrlParser: true})
        .then(
            ()=>{
                console.log('MongoDB Connected..')
            })
        .catch(
            err => {
                console.log(err)
            });
    },
    //define models
    define: ()=>{
        const Schema = mongoose.Schema;

        const user_schema = new Schema({
            first_name:     String,
            last_name:      String,
            phone_number:   String,
            email_address:  String,
            password:       String
        });

        var User = mongoose.model('User', user_schema);
        console.log('Models Defined...');
    }
}
