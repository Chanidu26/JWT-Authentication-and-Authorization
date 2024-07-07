const user = require('../models/User');
const bcrypt = require('bcrypt');

const signup = async (req, res) => {

    try{

       const { firstname, lastname, email, password } = req.body;
       const hashpassword = await bcrypt.hash(password, 10);

       const newUser = new user({
        firstname,
        lastname,
        email,
        password: hashpassword
       });
       const savedUser = await newUser.save();
       res.status(200).json({ message: 'User created successfully', user: savedUser });
    }
    catch(err){
        res.status(500).json({ error: err.message });
    }
}

module.exports = { signup };


