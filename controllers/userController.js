mongoController = require('./mongoController')
fx  =   require('./commonUtility')
module.exports = {
    register: (req, res, nex)=>{

        User = require('../models/User')

        //assign variables
        var user = new User({ 
            id              : fx.random(10,10000),
            first_name      : req.body.first_name,
            last_name       : req.body.last_name,
            phone_number    : req.body.phone_number,
            email_address   : req.body.email_address,
            password        : req.body.password
         });

         //save new user instance {utilizes promises}
         user.save();
        
         res.redirect('/');
              

    
    },

    
}