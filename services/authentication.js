const JWT = require('jsonwebtoken')

const secret = "priti!16"

function createtokenforuser (user){
    const payload={
        _id :user._id,
        email:user.email,
        profileimageurl:user.profileimageurl,
        role:user.role
    };
    const token = JWT.sign(payload,secret);
    return token;
}

function validatetoken(token){
    const payload = JWT.verify(token,secret)
    return payload
}


module.exports ={
    createtokenforuser,
    validatetoken}
