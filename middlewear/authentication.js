const { validatetoken } = require("../services/authentication");

function checkforcookie(cookiename){
    return (req,res,next)=>{
        const tokencookievalue = req.cookies[cookiename]
        if(!tokencookievalue){
            console.log("cookie value not present")
            return next();
        }
        console.log(tokencookievalue)
        try{
            const userpayload = validatetoken(tokencookievalue)
            req.user = userpayload;
        }catch(err){console.log(err)}
        return next();
    }
}                                    

module.exports= {
    checkforcookie
}