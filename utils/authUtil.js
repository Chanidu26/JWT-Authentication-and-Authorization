const jwt = require('jsonwebtoken');
const { secret } = require('../configuration/jwt');

function generateToken(user){

    const payload = {
        id: user._id,
        email : user.email,
        role: user.role
    };
    return jwt.sign(payload, secret, { expiresIn: '1h' });

}
function generateRefreshToken(user){
    const payload = {
        id: user._id,
        email : user.email,
        role: user.role

    }
    return jwt.sign(payload, secret, { expiresIn: '7h' });
}
function verifyToken(token){
    return jwt.verify(token, secret);
}
module.exports = { generateToken, generateRefreshToken , verifyToken }