const app = require('express')();
const http = require('http').Server(app);

const mongose = require('mongoose');

mongose.connect("mongodb+srv://neomiemigan:L3SHoXUPB6sqar7R@dbconnect.7sjsbfn.mongodb.net/?retryWrites=true&w=majority&appName=dbconnect");

const User = require('./models/userModel');

const insert = async () => User.create(
    {
        name: 'Néomie',
        email: 'neomie.migan@epitech.eu'
    }
)

insert()

http.listen(3000, function(){
    console.log('Server is running');
});