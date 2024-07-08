const jwt = require('jsonwebtoken');
const { secret } = require('../configuration/jwt');

function authenticateToken(req, res, next) {

    const authheader = req.headers["authorization"];
    if (!authheader) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const [bearer, token] = authheader.split(" ");

    if(bearer !== "Bearer" || !token){
        return res.status(401).json({ message: "Unauthorized" });
    }
    jwt.verify (token, secret, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Forbidden" });
        }
        req.user = user;
        next();
    });
}

module.exports = { authenticateToken }