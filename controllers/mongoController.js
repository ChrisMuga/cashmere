//mongo config
config = require('../config/config');
const mongoose = require('mongoose');

module.exports={
    //connect
    connect: ()=>{
        mongoose.connect(config.mongo_url,{useNewUrlParser: true, useCreateIndex: true})
        .then(
            ()=>{
                console.log('MongoDB Connected..')
            })
        .catch(
            err => {
                console.log(err)
            });
    },
    
}
