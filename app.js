const express=require('express');
const app = express();
// const public = express();
// const pub=require('./public/profil.html');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./api/route/user.route.js');
const userprofileRoute = require('./api/route/userprofile.route.js');
const hackathonEventRouter = require('./api/route/Event.route.js');
// const session = require('express-session');
// const pub=app.use(express.static('public'));

// const session = require('express-session');
// const home = app.use(express.static(__dirname + '/public'));


// app.use('/k',(req,res,next)=>{
//     res.status(200).json({
//         message:'app is running....'
//     })
// })

mongoose.connect('mongodb://localhost:27017/final',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('error',err=>{
    console.log('connection faild')
})
mongoose.connection.on('connected',()=>{
    console.log('connected successfully with database')
})

app.use(cors());

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Serve static files from the 'public' folder
// app.use(express.static(__dirname + '/public')); 

// app.use(session({
//     secret: 'your_secret_key', // Replace 'your_secret_key' with your actual secret key
//     resave: false,
//     saveUninitialized: false
// }));

app.use('/user',userRoute);//signup
app.use('/userprofile',userprofileRoute);
app.use('/Eventsubmit',hackathonEventRouter);



app.use((req,res,next)=>{
    res.status(404).json({
        Error:'url not found'
    })
})

module.exports=app;