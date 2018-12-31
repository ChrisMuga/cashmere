mongoController = require('./mongoController')
module.exports = {
    register: (req, res, nex)=>{

        User = require('../models/User')

        var user = new User({ 
            first_name      : req.body.first_name,
            last_name       : req.body.last_name,
            phone_number    : req.body.phone_number,
            email_address   : req.body.email_address,
            password        : req.body.password
         });

         user.save();
        
         res.send(user);
              

        
    
        
    }
}