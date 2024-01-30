const mongoose = require('mongoose')
const { createHmac, randomBytes } = require('crypto');
const { error } = require('console');
const { createtokenforuser } = require('../services/authentication');
const userschema = new mongoose.Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    salt: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true
    },
    profileimageurl: {
        type: String,
        default: "https://imgs.search.brave.com/mR-qTglzpGl8uw83n_ErbMNuZKXcqnfulrRGN17nsn0/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvZmVhdHVy/ZWQvY29vbC1wcm9m/aWxlLXBpY3R1cmUt/ODdoNDZnY29iamw1/ZTR4dS5qcGc"
    },
    role: {
        type: String,
        emum: ["USER", "ADMIN"],
        default: "USER"
    }
}, { timestamps: true })


//password hashing

userschema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return;
    const salt = randomBytes(16).toString();
    const hashedpassword = createHmac('sha256', salt).update(user.password).digest("hex")
    this.salt = salt;
    this.password = hashedpassword;
    next();
})


// password matching

userschema.static("matchpasswordandgeneratetoekn", async function (email, password) {
    const user = await this.findOne({ email })
    if (!user) throw new Error('user not found')
    const salt = user.salt;
    const hashpassword = user.password;
    const providedpassword = createHmac('sha256', salt).update(password).digest("hex")
    if (hashpassword !== providedpassword) {
        throw new Error('Password is incorrect');
    }
    const token = createtokenforuser(user)
    return token;
})


   
const User = mongoose.model("users", userschema)
module.exports = User;