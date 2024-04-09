const express=require('express');
const router=express.Router();
const mongoose = require('mongoose');
const Userprofile=require('../model/userprofile.model.js');

router.post('/profile',(req,res,next)=>{
       
            const userprofile=new Userprofile({
                            
                fullName: req.body.fullName,
                language:req.body.language,
                linkedin:req.body.linkedin,
                github:req.body.github
            })

            userprofile.save()
            .then(result=>{
                res.status(200).json({
                    new_userprofile:result
                })
            })
            .catch(err=>{
                res.status(500).json({
                    error:err
                })
            })

    })

    router.get('/students', async (req, res, next) => {
        try {
            // Fetch all student profiles from the database
            const students = await Userprofile.find();
    
            // Return the fetched student profiles as JSON response
            res.status(200).json({ students });
        } catch (error) {
            console.error('Error fetching student information:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    });




module.exports=router;


// const express = require('express');
// const router = express.Router();
// const mongoose = require('mongoose');
// const Userprofile = require('../model/userprofile.model.js');
// const User = require('../model/user.model.js');

// router.post('/profile', async (req, res, next) => {
//     try {
//         // Find the user based on username or email
//         const user = await User.findOne({ $or: [{ username: req.body.username }, { email: req.body.email }] });

//         if (!user) {
//             return res.status(404).json({ message: 'User not found' });
//         }

//         // Create user profile
//         const userprofile = new Userprofile({
//             user: user._id, // Assign user ID
//             fullName: req.body.fullName,
//             language: req.body.language,
//             linkedin: req.body.linkedin,
//             github: req.body.github
//         });

//         // Save user profile
//         const result = await userprofile.save();

//         res.status(200).json({ new_userprofile: result });
//     } catch (err) {
//         res.status(500).json({ error: err });
//     }
// });

// module.exports = router;
