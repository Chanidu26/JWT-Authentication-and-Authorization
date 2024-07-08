const User = require('../models/User');
const bcrypt = require('bcrypt');

async function createadminaccount() {

    const user = await User.findOne({ email: 'admintest@gmail.com' });

    if (user){
        console.log('Admin account already exists');
        
    }
    else{
        const newadmin = new User({
            firstname: 'admin',
            lastname: 'admin',
            email: 'admintest@gmail.com',
            password: await bcrypt.hash('admin', 10),
            role: 'admin'
        });
        
        await newadmin.save();
        console.log('Admin account created');
    }
}

module.exports = { createadminaccount }