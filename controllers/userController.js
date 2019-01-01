mongoController = require('./mongoController')
fx  =   require('./commonUtility')
module.exports = {
    
    //index
    index   :  (req, res, next) => {
                res.render('users/index',   { 
                                                title: 'Cashmere',
                                                data:   req.flash('data')
                                            });
                },

    //register
    register:   (req, res, nex) => {

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
         req.flash('data', `${user.first_name} ${user.last_name} can now log in`)
         res.redirect('/');
              

    
    },

    
}