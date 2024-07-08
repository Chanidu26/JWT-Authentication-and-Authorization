const express = require('express');
const User = require('../models/User');

async function getUserbyid(req, res) {

    try{
        const userId  = req.user.id;
        const user = await User.findOne({_id: userId});
        if(!user){
            return res.status(404).json({message: 'User not found'});
        }
        res.status(200).json({ user : user });
        
    }
    catch(err){
        res.status(500).json({ error: "internal server error" });
    }

}
module.exports = { getUserbyid }
