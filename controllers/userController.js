mongoController     =   require('./mongoController')
fx                  =   require('./commonUtility')
User                =   require('../models/User')
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

    login:  (req, res, next) => {
        User.find(
            { 
                email_address: req.body.email_address
            }, 
            function (err, docs) {
                if(err)
                {
                    res.send(err);
                }
                else
                {
                    //conditional rendering of data

                    //if docs object is empty
                    if(docs.length == 0 )
                    {
                        data = {
                                    code: 0,
                                    msg: 'no data'
                                }
                        res.send(data)
                    }
                    else
                    {
                        res.send(docs);
                    }
                }
            });
    }

    
}