const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const KEY = process.env.SECRET_KEY;

const generateToken = ( userId ) => {

    const token = jwt.sign({userId}, KEY, {expiresIn: "48h"});

    return token;
}


const getUserIdFromToken = (token) => {

    const decodedToken = jwt.verify(token,KEY);
    return decodedToken.userId;

}


module.exports = {generateToken, getUserIdFromToken}