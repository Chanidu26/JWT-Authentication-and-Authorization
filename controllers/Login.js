const User = require('../models/User');
const bcrypt = require('bcrypt');
const { generateToken } = require('../utils/authUtil');

async function Login(req, res) {

    try{
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if(!user){
            return res.status(400).json({ message: 'User not found' });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            throw new Error("Invalid password");
        }

        const token = generateToken(user);

        res.status(200).json({ user : user, token : token });

    }
    catch(err){
        res.status(401).json({ message : "invalid credentails" });
    }
    
}

module.exports = { Login };
