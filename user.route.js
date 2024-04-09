const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
const User=require('../model/user.model.js');
// const pub=require('./public/event.html');
const bcrypt=require('bcrypt');
// const { hash } = require('bcrypt');
const jwt=require('jsonwebtoken');
// const session = require('express-session');
// router.use(express.static('public'));

// router.use(session({
//     secret: 'your_secret_key', // Replace 'your_secret_key' with your actual secret key
//     resave: false,
//     saveUninitialized: false
// }));

router.post('/signup',(req,res,next)=>{
    // res.status(200).json({
    //     message:'user route working'
    // })
    bcrypt.hash(req.body.password,10,(err, hash)=>{
        if(err){
            return res.status(500).json({
                error:err
            })
        }else{
            const user=new User({
                _id: new mongoose.Types.ObjectId,
                username:req.body.username,
                email:req.body.email,
                password:hash,
                role:req.body.role
            })

            // let index=0;
            // while (index<1) {
                
            //     const user=new User({
            //         _id: new mongoose.Types.ObjectId,
            //         username:req.body.username,
            //         email:req.body.email,
            //         password:hash,
            //         role:req.body.role
            //     })

            //     user.save()
            // .then(result=>{
            //     res.status(200).json({
            //         new_user:result
            //     })
            // })
            // .catch(err=>{
            //     res.status(500).json({
            //         error:err
            //     })
            // })

            // index++;
                
            // }
            user.save()
            .then(result=>{
                res.status(200).json({
                    new_user:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })


        }
    })

})


router.post('/login',(req,res,next)=>{
    User.find({ username:req.body.username})
    .exec()
    .then(user=>{
        if(user.length < 1) {
            return res.status(401).json({
                msg:'user not exist'
            })
        }
        bcrypt.compare(req.body.password,user[0].password,(err,result)=>{
            if(!result) {
                return res.status(401).json({
                    msg:'password matching fail'
                })
            }
            if(result){

                
                // req.session.user = {
                //     // _id: user[0]._id,
                //     username: user[0].username,
                //     email: user[0].email,
                //     role: user[0].role
                // };
                // if(req.session.user){
                //     console.log("session is created!!");
                //     req.session.user=1;
                //     console.log(req.session.user);
                //     // res.redirect('/event.html');
                // }
                // req.session.user=false;

                const token=jwt.sign({
                    username:user[0].username,
                    role:user[0].role,
                    email:user[0].email
                },
                'this is dummy text',
                {
                    expiresIn:"24h"
                }
                );
                
                res.status(200).json({
                    _id:user[0]._id,
                    username:user[0].username,
                    role:user[0].role,
                    email:user[0].email,
                    token:token,
                })
                
            }
        })
    })
    .catch(err=>{
        res.status(500).json({
            err:err
        })
    })

})


module.exports=router;
