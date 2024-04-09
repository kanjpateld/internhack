const mongoose = require('mongoose');
const userprofileSchema = mongoose.Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    // user: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'User' // Reference to the User model
    // },
    fullName: String,
    language: String,
    linkedin: String,
    github: String
});

module.exports=mongoose.model('userprofile',userprofileSchema);